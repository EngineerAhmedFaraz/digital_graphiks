import React from "react";
import styles from "@/app/components/cards/card4/card4.module.css";
import Image from "next/image";
import card4Img from "../../../assests/img/remover-img1.png";

const Card4 = () => {
  return (
    <>
      <div className={styles.card4_wrapper}>
        <h2 className={styles.card4_title}>ESSENTIALS</h2>
        <div className={styles.Card4_img}>
          <Image src={card4Img} />
        </div>
        <p className={styles.card4_subtitle}>06 - Facial Exfoliant</p>
      </div>
    </>
  );
};

export default Card4;
