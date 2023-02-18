import React from 'react';
import ImageRight from "@/static/images/image 26.svg"
import Imageleft from "@/static/images/image 27.svg"
import dynamic from "next/dynamic";
import {SwiperSlide} from "swiper/react";
import Slider from "@/components/slider/slide/slide";
import SlideProductHeader from "@/components/productSlider/slides";
import Image from "next/image";
import Slide1 from "src/static/images/image 29.svg";
import Slide2 from "src/static/images/image 28.svg";
import ImageProduct from "@/static/images/image 32.svg";
const rowSlides=[Slide1,Slide2]

const DynamicImageSlider = dynamic(() => import("@/components/slider/multiple"), {
   ssr:false
});
const breakpointOption = {
    1200: { slidesPerView: 1, slidesPerGroup: 1 },
};

const slidesRight = new Array(4).fill( {image:ImageRight})

const slidesLeft = new Array(4).fill( {image:Imageleft, discountValue: 3343000, price: 3343000, discountPercent: 34,title:"همزن برقی Sanford"})


const HeaderBottom = () => {
    return (
        <div className="slider header__bottom mobile row position-relative">
            <div className="col-md-12 col-lg-9">
                <div className="slider__right position-relative">
                    <DynamicImageSlider
                        SwiperOptions={{ breakpoints: breakpointOption }}
                    >
                        {slidesRight?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Slider {...slide} />
                            </SwiperSlide>
                        ))}
                    </DynamicImageSlider>
                </div>

            </div>

            <div className="col-md-3">
                <div className="slider__left position-relative product__header">
                    <DynamicImageSlider
                        SwiperOptions={{ breakpoints: breakpointOption,pagination:false }}
                    >
                        {slidesLeft?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <SlideProductHeader  {...slide} />
                            </SwiperSlide>
                        ))}
                    </DynamicImageSlider>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;