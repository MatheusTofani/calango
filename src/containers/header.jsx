import { FaPinterest, FaInstagram, FaTiktok } from "react-icons/fa";

const Header = () => {

    const navs = [
        { name: "QUEM SOMOS", href: "" },
        { name: "NOSSOS PRODUTOS", href: "" },
        { name: "PERGUNTAS FREQUENTES", href: "" },
        { name: "COMO FAZER SEU PEDIDO", href: "" },
    ]

    const redes = [
        { icon: <FaInstagram />, href: "" },
        { icon: <FaPinterest />, href: "" },
        { icon: <FaTiktok />, href: "" },
    ]

    return (
        <header className="min-h-[100px] w-full px-[50px] text-[#3BCF41] flex justify-between items-center py-[30px]">
            <img src="/logo.png" alt="" />

            <nav>
                <ul className="flex gap-[20px] text-[18px]">
                    {navs.map((nav, index) => (
                        <li key={index}>
                            {nav.name}
                        </li>
                    ))}
                </ul>
            </nav>

            <ul className="flex gap-[30px]">
                {redes.map((item, index) => (
                    <li key={index} className="text-[30px]">
                        {item.icon}
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header;