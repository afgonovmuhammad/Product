import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles7.css";

import main5 from '../assets/main7.png'
import main5A from '../assets/main7A.png'
import main5B from '../assets/main7B.png'

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function Swiper7() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={120}
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
            <div className="">
                <img className="" src={main5} alt="" />

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5A} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5B} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5A} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <img className=" bg-cover" src={main5} alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
