import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <div className="p-4 text-[40px] bg-[#25D366] text-[#FDFBFE] rounded-full  hover:bg-[#01D366] transition-colors duration-300 fixed bottom-6 right-6 shadow-lg cursor-pointer">
      <a href="https://wa.me/5577988740276?text=Ol%C3%A1%2C%20vim%20do%20catalogo%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer" aria-label="Converse pelo WhatsApp">
      <FaWhatsapp />
      </a>
    </div>
  );
};


export default Whatsapp;