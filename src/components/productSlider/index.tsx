import React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image"
import {SwiperProps, SwiperSlide} from "swiper/react";
import {ArrowLeft2, Icon} from "iconsax-react";
import Slide from "@/components/productSlider/slides";

const DynamicImageSlider = dynamic(() => import("@/components/slider/multiple"), {
    ssr:false
});

type Props={
    icon:Icon,
    title:string,
    breakpointOption:SwiperProps["breakpoints"],
    slides:Array<any>
}

const ProductSlider = ({icon:Icon,title,breakpointOption,slides}:Props) => {
    return (
        <div className="product__slider">
            <div className="product__header d-flex align-items-center">
                <div className="product__header-right d-flex align-items-center">
                    <div className="product__header-icon d-flex align-items-center justify-content-center">
                        <Icon size={24}/>
                    </div>
                    <span>{title}</span>
                </div>
                <div className="line flex-grow-1"></div>
                <div className="product__header-left">
                    <span>مشاهده همه</span>
                    <ArrowLeft2  size={16}/>
                </div>
            </div>
<div className="position-relative">
    <DynamicImageSlider
        SwiperOptions={{ breakpoints: breakpointOption,pagination:false }}
    >
        {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
                <Slide {...slide} />
            </SwiperSlide>
        ))}
    </DynamicImageSlider>
</div>

        </div>
    );
};

export default ProductSlider;