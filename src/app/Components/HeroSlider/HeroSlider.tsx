/* eslint-disable @typescript-eslint/no-explicit-any */

import Slider from "react-slick";
import { HeroSliderData } from "../../static";
import SingleSlider from "./SingleSlider";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Element } from "react-scroll";

 

const HeroSlider = () => {
  const settings = {
    className: "slick-container",
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    dots: true,
    arrows: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null); // type: <Slider | null>

  return (
    <Element name="home">
    <div className="pt-10 slider">
      <Slider ref={sliderRef} {...settings}>
        {HeroSliderData?.map((data: any, index: number) => (
          <SingleSlider data={data} key={index} />
        ))}
      </Slider>
    </div>
    </Element>
  );
};

export default HeroSlider;
