import React from "react";
import Image from "next/image"
import UseToCommas from "@/hooks/useToCommas";

type Props={
    image?:string,
    price?:number,
    discountPercent?:number,
    discountValue?:number,
    title?:string
}
const SlideProduct = ({image,price,discountPercent,discountValue,title}:Props) => {
        const {toCommas}=UseToCommas()
    return (
        <div role="button" className="product text-center">
            <Image className="product__image" src={image??''} alt='slider-image' />
            <div className="product__price">
                <div className="product__title text-right">
                    <span >{title}</span>
                </div>
                {
                    price &&  <div className="text-left product__price-main">
                        <span className="product__price-main-value">{toCommas(price)}</span>
                        <span className="product__price-text">تومان</span>
                    </div>
                }

                {discountValue &&
                <div className="d-flex align-items-center justify-content-between">
                    <div className="product__price-percent">
                        <span>{discountPercent}%</span></div>
                    <div className="product__price-value">
                        <span >{toCommas(discountValue)}</span>
                    </div>
                </div>
                }

            </div>
        </div>
    );
};

export default SlideProduct;
