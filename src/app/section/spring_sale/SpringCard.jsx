import React from "react";
import styles from "@/app/section/spring_sale/springCard.module.css";
import Button from "@/app/components/button/Button";
import springImg from "../../assests/img/sale-img.png";
import Image from "next/image";

const SpringCard = () => {
  return (
    <>
      <div className={styles.springCard_wrapper}>
        <div className={styles.springCard_section}>
          <div className={styles.springCard_box1}>
            <h2 className={styles.springCard_title}>SPRING SALE !</h2>
            <p className={styles.springCard_subttitle}>
              90% OFF IN ALL PRODUCTS
            </p>
          </div>
          <Button title="SHOP NOW" className={styles.springCard_btn} />
        </div>
        <Image
          src={springImg}
          className={styles.springCard_Img}
          alt="spring/img"
        />
      </div>
    </>
  );
};

export default SpringCard;
