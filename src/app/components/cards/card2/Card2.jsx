import React from "react";
import styles from "@/app/components/cards/card2/card2.module.css";
import Image from "next/image";
import Button from "../../button/Button";

const Card2 = ({ item: { icon, title, subTitle } }) => {
  return (
    <>
      <div className={styles.card2_wrapper}>
        <div className={styles.icon_card2}>
          <Image src={icon} className={styles.Card2Img} alt="icon/img" />
        </div>
        <h2 className={styles.card2_title}>{title}</h2>
        <Button title={subTitle} className={styles.btn_card2} />
      </div>
    </>
  );
};

export default Card2;
