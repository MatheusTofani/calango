"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AddCatalogo() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSelectImages(e) {
    const files = e.target.files;

    if (!files) return;

    if (files.length > 3) {
      alert("Você pode enviar no máximo 3 imagens.");
      e.target.value = "";
      return;
    }

    setImages(Array.from(files)); // <-- Agora é sempre array
  }

  async function handleCreateCatalog(e) {
    e.preventDefault();

    if (!name.trim()) return alert("Nome é obrigatório!");
    if (!category.trim()) return alert("Categoria é obrigatória!");

    setLoading(true);

    try {
      const { data: catalog, error: catalogError } = await supabase
        .from("catalog")
        .insert([{ name, category }])
        .select()
        .single();

      if (catalogError) throw catalogError;

      const catalogId = catalog.id;

      // Upload das imagens
      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const filePath = `${catalogId}/${Date.now()}-${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from("catalog-images")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: publicUrl } = supabase.storage
          .from("catalog-images")
          .getPublicUrl(filePath);

        await supabase.from("catalog_images").insert([
          {
            catalog_id: catalogId,
            url: publicUrl.publicUrl,
          },
        ]);
      }

      alert("Catálogo criado com sucesso!");

      setName("");
      setCategory("");
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Erro ao criar catálogo!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleCreateCatalog}
      className="flex flex-col gap-4 p-4 max-w-lg"
    >
      <h2 className="text-xl font-bold">Criar novo item</h2>

      <input
        type="text"
        placeholder="Nome"
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoria"
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleSelectImages}
        className="border p-2 rounded"
      />

      <p className="text-sm text-gray-500">
        Máximo permitido: <strong>3 imagens</strong>
      </p>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white p-2 rounded"
      >
        {loading ? "Salvando..." : "Criar catálogo"}
      </button>
    </form>
  );
}
