import React, { useState } from "react";
import marvel1 from "../Assets/marvel1.jpg";
import int from "../Assets/int.jpg";
import dc from "../Assets/dc.jpg";
import op from "../Assets/op.png";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";

const Beranda = () => {
  const slides = [
    {
      img: marvel1,
    },
    {
      img: int,
    },
    {
      img: dc,
    },
    {
      img: op,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideRight = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const handleSlideLeft = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevSlide);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="bg-second relative">
      <div className="w-full h-52 md:h-96 lg:h-120  m-auto py-4 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{
            backgroundImage: `url(${slides[currentSlide].img})`,
          }}
        ></div>
        <div className="hidden group-hover:block absolute top-1/2 left-5 text-white cursor-pointer">
          <HiChevronDoubleLeft onClick={handleSlideLeft} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 right-5 text-white cursor-pointer">
          <HiChevronDoubleRight onClick={handleSlideRight} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex === currentSlide ? "text-black" : "text-gray-400"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beranda;
