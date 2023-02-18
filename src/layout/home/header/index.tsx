import React from 'react';
import HeaderTop from "@/layout/home/header/top";
import HeaderBottom from "@/layout/home/header/bottom";
import RowSlides from "@/domain/home/rowSlides";
import Slide1 from "src/static/images/image 29.svg";
import Slide2 from "src/static/images/image 28.svg";

const rowSlides=[Slide1,Slide2]

const Header = () => {
    return (
       <>
           <HeaderTop/>
           <HeaderBottom />
           <RowSlides slides={rowSlides}/>
       </>
    );
};

export default Header;