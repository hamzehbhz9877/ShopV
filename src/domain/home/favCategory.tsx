import React from 'react';
import {Category} from "iconsax-react";
import Cart from "@/static/images/cart_8 [Converted]-01 2.svg"
import ImageProduct from "@/static/images/image 32.svg"
import Image from "next/image"
const data = new Array(7).fill( {image: ImageProduct, title: "موبایل"})

const FavCategory = () => {
    return (
        <div className="fav-category">


            <div className="d-flex fav-category-products">
                <div className="flex-grow-1">
                    <div className="fav-category__right">
                        <div className="product__header d-flex align-items-center">
                            <div className="product__header-right d-flex align-items-center">
                                <div className="product__header-icon d-flex align-items-center justify-content-center">
                                    <Category size={24}/>
                                </div>
                                <span>دسته بندی های محبوب</span>
                            </div>
                            <div className="line flex-grow-1"></div>
                        </div>
                        <div className="row fav-category__right-card g-2 g-sm-4">
                            {data.map((item, index) => {
                                return (
                                    <div className="fav-category__right-card-col" key={index}>
                                        <div className="fav-category__right-card-item text-center">
                                            <Image src={item.image} alt="fav-category-image"/>
                                            <div>
                                                <span>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

                <div className="fav-category__left">
                    <Image src={Cart} alt="fav-category-image"/>
                </div>
            </div>
        </div>
    );
};

export default FavCategory;