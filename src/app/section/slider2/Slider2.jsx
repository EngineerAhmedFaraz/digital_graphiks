import React from "react";
import styles from "@/app/section/slider2/Slider2.module.css";
import Image from "next/image";
import removeImg from "../../assests/img/remove-img2.png";
import Card4 from "@/app/components/cards/card4/Card4";

const Slider2 = () => {
  return (
    <>
      <div className={styles.slider2_wrapper}>
        <div className={styles.slider2_container}>
          <div className={styles.slider2_section}>
            <Card4 />
          </div>
          <Image src={removeImg} className={styles.slider2_Img} />
        </div>
      </div>
    </>
  );
};

export default Slider2;
