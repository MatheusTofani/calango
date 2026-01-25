"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageLoader from "@/components/pageLoader";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slots = [
      { image: "https://eysredkdkvymsfheinpv.supabase.co/storage/v1/object/public/carousel/slot1.jpg" },
      { image: "https://eysredkdkvymsfheinpv.supabase.co/storage/v1/object/public/carousel/slot2.jpg" },
      { image: "https://eysredkdkvymsfheinpv.supabase.co/storage/v1/object/public/carousel/slot3.jpg" },
      { image: "https://eysredkdkvymsfheinpv.supabase.co/storage/v1/object/public/carousel/slot4.jpg" },
      { image: "https://eysredkdkvymsfheinpv.supabase.co/storage/v1/object/public/carousel/slot5.jpg" },
    ];

    setImages(slots);
    setLoading(false);
  }, []);

  const settings = {
    dots: false,
    infinite: images.length > 1,
    autoplay: images.length > 1,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-2 md:px-[65px] relative">
      {/* LOADING */}
      {loading && <PageLoader />}

      <div className="flex items-center justify-center h-[45px] absolute md:h-[100px]">
        <img className="md:h-auto h-[30px]" src="/assets/icon.png" />
      </div>

      <div className="relative z-[2] hidden md:block w-full md:h-[528px]">
        <img
          src="/assets/border.png"
          className="absolute z-[2] top-0 left-0 w-full h-full pointer-events-none"
        />

        {!loading && (
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
              <div key={index}>
                <img
                  src={item.image}
                  alt={`banner-${index}`}
                  className="w-full h-[212px] md:h-[528px] object-cover"
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
        )}
      </div>


       <div className="relative z-[2]  w-full md:hidden">
        <img
          src="/mobile/border.png"
          className="absolute z-[2] w-full h-[212px] top-0 left-0 pointer-events-none"
        />

        {!loading && (
          <Slider
            className="outline-none"
            style={{
              WebkitMaskImage: "url(/mobile/background.png)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage: "url(/mobile/background.png)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
            {...settings}
          >
            {images.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={`banner-${index}`}
                  className="w-full h-[212px] md:h-[528px] object-cover"
                  style={{
                    WebkitMaskImage: "url(/mobile/background.png)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskImage: "url(/mobile/background.png)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                  }}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Carousel;
