import React, {useRef, useState} from 'react';
import Image from "next/image";
import Logo from "src/static/images/Logo.svg";
import {ArrowDown2, Category, SearchNormal, ShoppingCart,Login, TicketDiscount,HambergerMenu} from 'iconsax-react';
import {headerCategory} from "@/api/headerCategory"
import CategoryContent from "@/layout/home/header/categoryContent";
import Categories from "@/layout/home/header/categories";
import Fire from "@/static/images/fire.svg"
import useClickOutside from "@/hooks/useClickOutside";
const HeaderTop = () => {
    const clickRef = useRef<HTMLDivElement>(null);

    const [categoryId, setCategoryId] = useState(1)
    const [isDropdownActive,setIsDropDownActive]=useState(false)


    const handleDropDown=()=>setIsDropDownActive(true)

    const closeMenu = () => {
        clickRef.current?.classList.remove("category-dropdown--active");
        setIsDropDownActive(false)
    };
    useClickOutside(clickRef, closeMenu);
    return (
        <>
            <div className="logo-mobile d-flex align-items-center">
                <Image width={24} height={24} src={Logo} alt="logo"/>
                <h6 className="mb-0">ویتسل</h6>
            </div>

            <div className="navbar header__top d-flex align-items-center position-relative">
                <div className="navbar__right">
                    <ul className="d-flex align-items-center">
                        <li className="navbar__right-item mobile">
                            <HambergerMenu size={24}/>
                        </li>
                        <li className="navbar__right-item">
                            <Image width={40} height={40} src={Logo} alt="logo"/></li>
                        <li className="navbar__right-item">
                            <a onMouseEnter={handleDropDown}>
                                <Category  size={20}/>
                                <span className="mx-1">دسته بندی ها</span>
                                <ArrowDown2  size={16}/>
                            </a>
                            <div ref={clickRef} className={`category-dropdown d-flex ${isDropdownActive ?
                                "category-dropdown--active":""}`}>
                                <Categories headerCategory={headerCategory} setSubCategoryId={setCategoryId}/>
                                <CategoryContent categoryId={categoryId}/>
                            </div>
                        </li>
                        <li className="navbar__right-item">
                            <a>
                                <Image src={Fire} alt="fire"/>
                                <span className="mx-1">پرفروش ترین ها</span>
                            </a>

                        </li>
                        <li className="navbar__right-item">
                            <a href="">
                                <TicketDiscount  size={20}/>
                                <span className="me-1">تخفیف دار ها</span>
                            </a>

                        </li>
                    </ul>
                </div>
                <div className="flex-grow-1"/>
                <div className="navbar__left">
                    <ul className="d-flex align-items-center">
                        <li className="navbar__left-item position-relative">
                            <input placeholder="جستجوی محصولات..." type="text"
                                   className="form-control navbar__left-search border-0"/>
                            <SearchNormal  className="navbar__left-search-icon" size={20}/>
                        </li>
                        <li className="navbar__left-item">
                            <div className="navbar__left-cart d-flex align-items-center justify-content-center">
                                <a href=""><ShoppingCart  size={22}/></a>
                            </div>
                        </li>
                        <li className="navbar__left-item">
                            <button className="btn text-white">ورود/ثبت نام</button>
                        </li>
                        <li className="navbar__left-item mobile position-relative">
                            <input placeholder="جستجوی محصولات..." type="text"
                                   className="form-control navbar__left-search border-0"/>
                            <SearchNormal  className="navbar__left-search-icon" size={20}/>
                        </li>
                        <li className="navbar__left-item mobile"><a><ShoppingCart  size={22}/></a></li>
                        <li className="navbar__left-item mobile"><a><Login className="login-icon"  size={22}/></a></li>
                    </ul>
                </div>
            </div>

        </>

    );
};

export default HeaderTop;