import React from "react";
import styles from "@/app/section/slider1/slider1.module.css";
import testImg from "../../assests/img/testimonal-img.png";
import Image from "next/image";

const Slider1 = () => {
  return (
    <>
      <div className={styles.slider1_wrapper}>
        <div className={styles.slider1_container}>
          <div className={styles.slider1_section}>
            <span className={styles.slider1_subtitle1}>FROM THE PEOPLE</span>
            <p className={styles.slider1_disc}>
              With sensitive skin, finding the right products was a challenge.
              But their natural cosmetics worked wonders, leaving my skin
              healthy, radiant, and problem- free. Thank you, for making me feel
              beautiful and confident!
            </p>
            <span className={styles.slider1_subtitle2}>Jane Doe, 2022</span>
          </div>
          <Image src={testImg} className={styles.slider1_Img} />
        </div>
      </div>
    </>
  );
};

export default Slider1;
