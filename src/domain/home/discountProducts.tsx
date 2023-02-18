import React from 'react';
import ProductSlider from "@/components/productSlider";
import {TicketDiscount} from "iconsax-react"
import Image from "@/static/images/image 31.svg"
const breakpointOption = {
    1340: {slidesPerView: 6, slidesPerGroup: 6},
    992: {slidesPerView: 5, slidesPerGroup: 5},
    768: {slidesPerView: 3, slidesPerGroup: 3},
    0: {slidesPerView: 2, slidesPerGroup: 2},
};
const slides = new Array(12).fill( {
    image: Image,
    discountValue: 4343000, price: 4343000, discountPercent: 34,
})

const DiscountProduct = () => {
    return (
        <div className="discount container">
            <ProductSlider slides={slides} icon={TicketDiscount}
                           title={"تخفیف های ویتسل"} breakpointOption={breakpointOption}/>
        </div>
    );
};

export default DiscountProduct;