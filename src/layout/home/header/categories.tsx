import React, {useRef} from 'react';
import {headerCategory} from "@/api/headerCategory";
import {ArrowLeft} from 'iconsax-react';
import Image from "next/image"

type Props =  { setSubCategoryId:(id:number)=>void,headerCategory:typeof headerCategory}

const activeList = "category-dropdown__header-item--active"

const DropdownHeading = ({headerCategory,setSubCategoryId}: Props) => {

    const tabRef = useRef<HTMLLIElement>(null)

    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>,id:number) => {
        if (document.querySelector(`.${activeList}`)) {
            document.querySelector(`.${activeList}`)?.classList.remove(activeList)
        }
        e.currentTarget.classList.add(activeList)
        setSubCategoryId(id)
    }

    return (
        <div>
            <ul>
                {
                    headerCategory?.map(({tab,icon,id,active}:typeof headerCategory[0],index)=>

                        <li key={index} className={`category-dropdown__header-item position-relative 
         ${active ? activeList : ''}`}
                            ref={tabRef} onMouseEnter={(e) => handleMouseEnter(e,id)}
                        >
                            <a>
                                <Image src={icon} className="icon" alt="image"/>
                                <span className="me-2">{tab}</span>
                                <ArrowLeft variant="Linear" className="arrow-left category-dropdown__header-item-ico" size={16}/>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>

    );
};

export default DropdownHeading;