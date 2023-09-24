import React from "react";
import styles from "@/app/section/step_card/stepcard.module.css";
import Card2 from "@/app/components/cards/card2/Card2";
import { stepCard } from "@/app/utils/content/data";

const StepCard = () => {
  return (
    <>
      <div className={styles.stepCard_wrapper}>
        {stepCard.map((item, i) => (
          <Card2 key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default StepCard;
