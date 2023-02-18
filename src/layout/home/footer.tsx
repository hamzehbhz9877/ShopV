import React from 'react';
import Logo from "@/static/images/Logo (2).svg"
import Image from "next/image"
import {Send,Call,Map,Send2,Whatsapp,Instagram} from "iconsax-react";
import Cert1 from "@/static/images/image 33.svg"
import Cert2 from "@/static/images/image 34.svg"

const col1={title:"با ویتسل",items:[
        {value:"درباره ما"},
        {value:"تماس با ما"},
        {value:"حریم خصوصی"},
        {value:"شرایط بازگشت کالا"},
    ]}
const col2={title:"محصولات ویتسل",items:[
        {value:"کالای دیجیتال"},
        {value:"سوپر مارکت"},
        {value:"گوشی موبایل"},
        {value:"ابزار الات"},
        {value:"ابزار لوازم تحریر"},
    ]}

const col3={title:"ارتباط با ویتسل",items:[
        {value:"vitdell@gmail.com",icon:Send},
        {value:"۰۸۴۷۷۴۷۳۲۲",icon:Call},
        {value:"خیابان ولی عصرنرسیده به سینما آفریقا",icon:Map},
    ]}


const Footer = () => {
    return (
        <div className="footer container">
            <div className="row gx-3 gy-4">
                <div className="col-6 col-md-3 logo">
                    <div className="footer__about">
                        <Image className="footer__logo" src={Logo} alt="logo"/>
                        <h6>ویتسل</h6>
                        <p className="m-0">
                            صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن
                        </p>
                    </div>

                </div>
                <div className="col-6 col-md-2">
                    <div className="footer__vitsell">
                        <h6>{col1.title}</h6>
                        <ul>
                            {col1.items.map((item,index)=>{
                                return <li key={index}><a href="">{item.value}</a></li>
                            })}
                        </ul>
                    </div>

                </div>
                <div className="col-6 col-md-2">
                    <div className="footer__products">
                        <h6>{col2.title}</h6>
                        <ul>
                            {col2.items.map((item,index)=>{
                                return <li key={index}><a href="">{item.value}</a></li>
                            })}
                        </ul>
                    </div>

                </div>
                <div className="col-6 col-md-3">
                    <div className="footer__communication">
                        <h6>{col3.title}</h6>
                        <ul>
                            {col3.items.map((item,index)=>{
                                return <li key={index} className="footer__communication-item"><a className="d-flex" href="">
                                    <item.icon size={24}/>
                                    {item.value}</a></li>
                            })}
                        </ul>
                    </div>

                    <ul className="footer__social-media">
                        <li className="footer__social-media-item"><a href=""><Send2 size={24}/></a></li>
                        <li className="footer__social-media-item"><a href=""><Whatsapp size={24}/></a></li>
                        <li className="footer__social-media-item"><a href=""><Instagram size={24}/></a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-2  certificate">
                    <div className="footer__certificate">
                        <div>
                            <Image src={Cert1} alt="logo"/>
                        </div>
                        <div>
                            <Image src={Cert2} alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__line"/>
            <p className="footer__re m-0">کلیه حقوق متعلق به شرکت ویستا است. </p>
        </div>
    );
};

export default Footer;