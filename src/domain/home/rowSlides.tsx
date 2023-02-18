import React from 'react';
import Image from "next/image"

type Props={
    slides:Array<string>
}
const RowSlidesHeader = ({slides}:Props) => {
    return (
        <div className="mobile">
            <div className="row row-slides g-2">
                {slides.map((slide,index)=>{
                    return(
                        <div className="col-6" key={index}>
                            <Image src={slide} className="row-slides__image" alt="slide"/>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default RowSlidesHeader;