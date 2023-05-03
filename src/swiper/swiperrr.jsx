import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

import main5 from '../assets/main5.png'
import main5A from '../assets/main5A.png'
import main5B from '../assets/main5B.png'

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Swiper5() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={92}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          376: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <img className=" bg-cover" src={main5} alt="" />
                <h1 className="pt-[24px] dark:text-[#121012] px-[10px]">By Wahid Ari |  03 March 2019</h1>
                <h1 className="lg:text-[24px] dark:text-[#121012] mx:text-[18px] font-[700] px-[20px] py-[5px] pb-[30px]">Increasing Prosperity With Positive Thinking</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5A} alt="" />
                <h1 className="pt-[24px] dark:text-[#121012] px-[10px]">By Wahid Ari |  03 March 2019</h1>
                <h1 className="lg:text-[24px] dark:text-[#121012] mx:text-[18px] font-[700] px-[20px] py-[5px] pb-[30px]">Increasing Prosperity With Positive Thinking</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5B} alt="" />
                <h1 className="pt-[24px] dark:text-[#121012] px-[10px]">By Wahid Ari |  03 March 2019</h1>
                <h1 className="lg:text-[24px] dark:text-[#121012] mx:text-[18px] font-[700] px-[20px] py-[5px] pb-[30px]">Increasing Prosperity With Positive Thinking</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5} alt="" />
                <h1 className="pt-[24px] dark:text-[#121012] px-[10px]">By Wahid Ari |  03 March 2019</h1>
                <h1 className="lg:text-[24px] dark:text-[#121012] mx:text-[18px] font-[700] px-[20px] py-[5px] pb-[30px]">Increasing Prosperity With Positive Thinking</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5A} alt="" />
                <h1 className="pt-[24px] dark:text-[#121012] px-[10px]">By Wahid Ari |  03 March 2019</h1>
                <h1 className="lg:text-[24px] dark:text-[#121012] mx:text-[18px] font-[700] px-[20px] py-[5px] pb-[30px]">Increasing Prosperity With Positive Thinking</h1>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
