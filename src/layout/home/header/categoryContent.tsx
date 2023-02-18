import React from 'react';
import {headerCategory} from "@/api/headerCategory";

type Props = {
    categoryId: number
}
const CategoryContent = ({categoryId}: Props) => {
    return (
        <div className="category-dropdown__content">
                <ul className="row">
                    {headerCategory.find((ele) => ele.id === categoryId)?.subCategory?.map((data,index) => {
                        return (
                                <li className="category-dropdown__content-item col-md-3" key={index}>
                                    <a href="#" className="category-dropdown__content-title d-inline-block">{data.title}</a>
                                        <ul>
                                            {data.subCategory.map((e,index) => {
                                                return (
                                                    <li key={index} className="category-dropdown__content-sub-item">
                                                        <a href="#">{e.tab}</a>
                                                        </li>
                                                )
                                            })}
                                        </ul>
                                </li>
                        )
                    })}
                </ul>
        </div>
    );
};

export default CategoryContent;