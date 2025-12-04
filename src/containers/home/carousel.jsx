"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    const loadImages = async () => {
      const base = "https://eysredkdkvymsfheinpv.supabase.co/storage/v1/object/public/carousel/";

      const slots = ["slot1.jpg", "slot2.jpg", "slot3.jpg"];

      const updated = slots.map((file) => ({
        image: `${base}${file}?refresh=${Date.now()}`
      }));

      setImages(updated);
    };

    loadImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-[65px]">
      {/* Logo no topo */}
      <div className="flex items-center justify-center absolute h-[100px]">
        <img src="/assets/icon.png" />
      </div>

      <div className="relative z-[2] w-full h-[528px]">
        {/* Moldura */}
        <img
          src="/assets/border.png"
          className="absolute z-[2] top-0 left-0 w-full h-full pointer-events-none"
        />

        <Slider
          className="outline-none"
          style={{
            WebkitMaskImage: "url(/assets/retangulo.png)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage: "url(/assets/retangulo.png)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
          {...settings}
        >
          {images.map((item, index) => (
            <div
              key={index}
              style={{
                WebkitMaskImage: "url(/assets/retangulo.png)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskImage: "url(/assets/retangulo.png)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            >
              <img
                src={item.image}
                alt="banner"
                className="w-full h-[528px] object-cover"
                style={{
                  WebkitMaskImage: "url(/assets/retangulo.png)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskImage: "url(/assets/retangulo.png)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
