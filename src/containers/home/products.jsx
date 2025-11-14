const ProductsHome = () => {
  const items = [
    {
      name: "MOLETONS",
      image: "/calango1.png",
      href: "",
    },
    {
      name: "CAMISAS",
      image: "/calango3.png",
      href: "",
    },
    {
      name: "MOLETONS",
      image: "/calango1.png",
      href: "",
    },
  ];

  return (
    <div className="h-[1000px] bg-[#D9D9D9] pt-[113px] pb-[183px]">
      <div className="px-[65px] h-full w-full flex flex-col justify-between">
        <div className="flex items-center gap-[54px]">
          <p className="text-[24px] w-[270px]">Nossos produtos</p>
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        <ul className="flex  justify-between  w-full">
          {items.map((item, index) => (
        <li
  key={index}
  className="cursor-pointer w-[450px] relative group"
>
  <img
    className="h-[600px] w-full border-[10px] object-cover border-[#131413] rounded-[40px] relative z-3"
    src={item.image}
    alt=""
  />

  <div className="bg-[#131413] h-[140px] w-[270px] rounded-[40px] flex items-end justify-center py-[17px] text-[#3BCF41] font-bold text-[30px] absolute bottom-[-70] z-2">
    {item.name}
  </div>

  <div className="absolute right-0 h-[75px] bottom-[-70px] w-[200px] text-[#131413] underline flex justify-center items-center text-[24px]">
    <span className="absolute z-3">+ Ver mais</span>

    
    <div className="w-[240px] h-full bg-[#3BCF41] rounded-[40px] absolute z-1 right-51 group-hover:right-0 transition-all duration-300"></div>
  </div>
</li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsHome;
