const Desc = () => {
  return (
    <div
      className="
        relative mx-auto text-center
        pb-[90px] md:pb-[150px] pt-[50px] md:pt-[100px]
        w-full md:w-[700px]
        px-4 md:px-0
        text-[20px] md:text-[32px]
      "
    >
      <img src="/assets/grafite2.png" className="absolute md:h-auto h-11 md:h-10 md:top-[-170] left-[10] top-[-150] md:left-[-260] z-[1]" alt="" />  

      {/* TEXTO */}
      <p className="bounded mx-auto md:text-[28px] text-[16px]  w-full ">
        IDEIA BOA VIRA ESTAMPA. <br /> ESTAMPA BOA VIRA LEMBRANÇA.
      </p>

      <p className="text-[11px] md:text-[18px] font-extralight mt-1 md:mt-5">
        PERSONALIZADOS, TERCEIRÃO, UNIVERSIDADE, INTERCLASSE, 9ºANO
      </p>
    </div>
  );
};

export default Desc;



  