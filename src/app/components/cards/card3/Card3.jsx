import React from "react";
import styles from "@/app/components/cards/card3/card3.module.css";
import Image from "next/image";

const Card3 = ({ item: { img, title, disc } }) => {
  return (
    <>
      <div className={styles.card3}>
        <div className={styles.inner_card3}>
          <Image src={img} className={styles.card3_img} alt="card3_img" />
        </div>
        <div className={styles.card3_body}>
          <h1 className={styles.card3_title}>{title}</h1>
          <p className={styles.card3_disc}>{disc}</p>
        </div>
      </div>
    </>
  );
};

export default Card3;
