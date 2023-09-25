import React from "react";
import styles from "../cards/card1.module.css";
import Image from "next/image";

const Card1 = ({ item: { disc, mini_title, img } }) => {
  return (
    <>
      <div className={styles.card1}>
        <div className={styles.inner_card1}>
          <Image src={img} className={styles.seller_img} alt="seller/img" />
        </div>
        <div className={styles.card1_body}>
          <p className={styles.disc}>{disc}</p>
          <span className={styles.mini_title}>{mini_title}</span>
        </div>
      </div>
    </>
  );
};

export default Card1;
