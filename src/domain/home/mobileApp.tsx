import React from 'react';
import Bazar from "@/static/images/image 9.svg"
import Mycat from "@/static/images/image 10.svg"
import Android from "@/static/images/Android.svg"
import Mobile from "@/static/images/Mobile.svg"
import Image from "next/image"
const MobileApp = () => {
    return (
        <div className="mobile-app">
                <div className="mobile-app__container">
                    <h3 className="mobile-app__title"> ویتسل را همیشه همراه  داشته باشید!</h3>
                    <button>
                        <Image src={  Android  } alt={"image"}/>
                        دانلود از بازار</button>
                    <button>
                        <Image src={  Mycat  } alt={"image"}/>
                        دانلود از مایکت</button>
                    <button>
                        <Image src={  Bazar  } alt={"image"}/>
                        دانلود مستقیم</button>

                    <div className="mobile-app__mobile-image">
                        <Image src={  Mobile  } alt={"mobile-app"}/>
                    </div>
                </div>

        </div>
    );
};

export default MobileApp;