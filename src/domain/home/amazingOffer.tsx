import React from 'react';
import Image from "next/image";
import Fire from "@/static/images/fire.svg"
import {ArrowLeft2} from "iconsax-react";
import ImageProduct from "src/static/images/image 31 (1).svg";
import ProductI from "src/static/images/image 27.svg";
import UseToCommas from "@/hooks/useToCommas";
import Product from "@/components/productSlider/slides";
import FireD from "@/static/images/Property 1=Default.svg"
import FireHover from "@/static/images/Property 1=Hover.svg"

const data = new Array(8).fill({
    image: ImageProduct,
    discountValue: 4343000, price: 4343000, discountPercent: 34,title:"کتونی نایک شماره 121"
})

const {toCommas}=UseToCommas()
const AmazingOffer = () => {
    return (
        <div className="amazing-offer">
            <div className="product__header d-flex align-items-center">
                <div className="product__header-right d-flex align-items-center">
                    <div className="product__header-icon d-flex align-items-center justify-content-center">
                        <Image src={Fire} width={20} height={20} alt="fire"/>
                    </div>
                    <span>پیشنهادات شگفت انگیز</span>
                </div>
                <div className="line flex-grow-1"></div>
                <div className="product__header-left">
                    <span>مشاهده همه</span>
                    <ArrowLeft2  size={16}/>
                </div>
            </div>

            <div className="d-flex">
                <div className="amazing-offer__right">
                        <Image src={FireD} className="fire" alt="fire"/>

                    <Product image={ProductI} title={"همزن برقی Sandford"} price={4343000}/>
                </div>
                <div className="amazing-offer__left ">
                    <div className="row amazing-offer__left-card g-2 gx-sm-4 gy-sm-3">
                        {data.map(({image,price,title,discountPercent,discountValue}, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="amazing-offer__left-card-item text-center">
                                        <Image className="amazing-offer__left-card-icon-fire" src={FireD} alt="fire"/>
                                        <Image className="amazing-offer__left-card-icon-fire-hover" src={FireHover} alt="fire"/>
                                        <div className="amazing-offer__left-card-icon-fire-hover"/>
                                       <Product price={price} discountPercent={discountPercent}
                                                     discountValue={discountValue} title={title} image={image}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AmazingOffer;