const Carousel = () => {
  return (
    <div className="px-[65px]">
      <div className=" flex items-center justify-center  absolute h-[150px] w-[150px]">
        <img src="/assets/icon.png" />
      </div>

      <img src="/assets/border.png" className="absolute z-[2]" alt="" />

      <div className="w-full h-auto relative">
        <img
          src="/assets/header.png"
          alt="Banner principal"
          className="w-full h-full object-cover"
          style={{
            WebkitMaskImage: "url(/assets/retangulo.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: "url(/assets/retangulo.png)",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />
      </div>



    </div>
  );
};

export default Carousel;
