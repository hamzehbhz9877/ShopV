import React, {RefObject} from "react";
import {ArrowLeft, ArrowRight} from "iconsax-react";
import ArrowLeftContainer from "@/static/images/ArrowLeftContainer.svg"
import ArrowRightContainer from "@/static/images/ArrowRightContainer.svg"
import Image from "next/image"

type CustomButtons = {
    prevRef: RefObject<any>;
    nextRef: RefObject<any>;
    bulletRef: RefObject<any>;
};

const CustomButtons = ({bulletRef, nextRef, prevRef}: CustomButtons) => {
    return (
        <div className="d-flex align-items-center justify-content-between slider__buttons">
            <div className="d-flex">
                <button className="swiper-button right bg-transparent" ref={prevRef}>
                    <div className="position-relative">
                        <Image alt="arrowContainer" src={ArrowRightContainer}/>
                        <ArrowRight className="arrow-right" size={20}/>
                    </div>

                </button>
                <button className="swiper-button left bg-transparent " ref={nextRef}>
                    <div className="position-relative">
                        <Image alt="arrowContainer" src={ArrowLeftContainer}/>
                        <ArrowLeft className="arrow-left" size={20}/>
                    </div>
                </button>
            </div>
             <div
                className="swiper-pagination position-static w-auto"
                ref={bulletRef}
            />
        </div>
    );
};

export default CustomButtons;
