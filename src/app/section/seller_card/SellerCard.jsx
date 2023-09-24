import Card1 from "@/app/components/cards/Card1";
import React from "react";
import styles from "../seller_card/sellarCard.module.css";
import Button from "@/app/components/button/Button";
import { sellerData } from "@/app/utils/content/data";

const SellerCard = () => {
  return (
    <>
      <div className={styles.seller_wrapper}>
        <div className={styles.seller_section1}>
          <h2 className={styles.seller_title}>Best Seller</h2>
          <Button className={styles.seller_btn} title="VIEW ALL" />
        </div>
        <div className={styles.sellerCard_group}>
          {sellerData.map((item, i) => (
            <Card1 key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SellerCard;
