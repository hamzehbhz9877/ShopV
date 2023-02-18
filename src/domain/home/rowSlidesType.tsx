import React from 'react';
import Image from "next/image"

import imageLeftTop from "@/static/images/image 29 (1).svg"
import imageLeftBottom from "@/static/images/image 29 (2).svg"
import imageRight from "@/static/images/image 28 (1).svg"

const RowSlidesType = () => {
    return (
            <div className="row row-slides g-2">
                <div className="col-sm-12 col-md-6">
                    <Image src={imageRight} className="row-slides__image" alt="slide"/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <Image src={imageLeftTop} className="row-slides__image" alt="slide"/>
                    <Image src={imageLeftBottom} className="row-slides__image mt-4" alt="slide"/>
                </div>
            </div>
    );
};

export default RowSlidesType;