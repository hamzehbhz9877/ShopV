import React, { useRef } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Slide from "@/components/slider/slide/slide";
import CustomButtons from "@/components/slider/customNavigationButton";
import UseNextPrevSwiper from "@/hooks/useNextPrevSwiper/useNextPrevSwiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type SlidesType = {
  SwiperOptions?: SwiperProps;
  children:any
};

const Multiple = ({ children, SwiperOptions}: SlidesType) => {
  const bulletRef = useRef(null);
  const { nextRef, prevRef, setSwiper, afterInit } = UseNextPrevSwiper();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        onAfterInit={afterInit}
        spaceBetween={18}
        navigation={{ prevEl: prevRef?.current, nextEl: nextRef?.current }}
        updateOnWindowResize
        pagination={{ clickable: true, el: bulletRef?.current }}
        onSwiper={setSwiper}
        {...SwiperOptions}
      >
          {children}
      </Swiper>
      <CustomButtons
        bulletRef={bulletRef}
        nextRef={nextRef}
        prevRef={prevRef}
      />
    </>
  );
};

export default Multiple;
