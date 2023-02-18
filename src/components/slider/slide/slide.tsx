import React from "react";
import Image from "next/image"
type Props={
  image:string
}
const Slide = ({image}:Props) => {

  return (
    <div
      role="button"
      className="product text-center"
    >
<Image src={image} alt='slider' />
    </div>
  );
};

export default Slide;
