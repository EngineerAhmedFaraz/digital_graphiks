import React from "react";
import styles from "@/app/section/result/result.module.css";
import Image from "next/image";
import resultImg from "../../assests/img/result2.png";

const Result = () => {
  return (
    <>
      <div className={styles.result_wrapper}>
        <div className={styles.result_container}>
          <div className={styles.result_box}>
            <h2 className={styles.result_title}>Little effort, big results.</h2>
            <p className={styles.result_subtitle}>SHOP NOW</p>
          </div>
          <Image src={resultImg} className={styles.result_img} />
        </div>
      </div>
    </>
  );
};

export default Result;
