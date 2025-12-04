"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const AdminForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg("Email ou senha incorretos.");
      return;
    }

    // salva login simples
    localStorage.setItem("admin-auth", "true");

    // Login OK → redirecionar
    router.push("/admin/dashboard");
  }

  return (
    <div className="bg-[#3BCF41] w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-3 w-[300px]"
      >
        <h2 className="text-xl font-bold">Acesso Admin</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#3BCF41] text-white py-2 rounded hover:bg-green-600"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default AdminForm;
