"use client";

import React from "react";
import styles from "@/app/section/slider2/Slider2.module.css";
import Image from "next/image";
import removeImg from "../../assests/img/remove-img2.png";
import Card4 from "@/app/components/cards/card4/Card4";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Slider2 = () => {
  return (
    <>
      <div className={styles.slider2_wrapper}>
        <div className={styles.slider2_container}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            speed={500}
            slidesPerView={1}
            loop="true"
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper">
            <SwiperSlide>
              <div className={styles.slider2_section}>
                <Card4 />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider2_section}>
                <Card4 />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider2_section}>
                <Card4 />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider2_section}>
                <Card4 />
              </div>
            </SwiperSlide>
          </Swiper>
          <Image
            src={removeImg}
            className={styles.slider2_Img}
            alt="remove/img"
          />
        </div>
      </div>
    </>
  );
};

export default Slider2;
