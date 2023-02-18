import React from 'react';
import ProductSlider from "@/components/productSlider";
import {MagicStar} from "iconsax-react"
import Image from "@/static/images/image 31.svg"
import ImageProduct from "@/static/images/image 31 (1).svg";
const breakpointOption = {
    1340: {slidesPerView: 6, slidesPerGroup: 6},
    992: {slidesPerView: 5, slidesPerGroup: 5},
    768: {slidesPerView: 4, slidesPerGroup: 4},
    0: {slidesPerView: 2, slidesPerGroup: 2},
};
const slides = new Array(12).fill({
    image: Image,
    discountValue: 4343000, price: 4343000, discountPercent: 34,
})

const BestSellProduct = () => {
    return (
        <div className="discount">
            <ProductSlider slides={slides} icon={MagicStar}
                           title={"پرفروشترین محصولات"} breakpointOption={breakpointOption}/>
        </div>
    );
};

export default BestSellProduct;