import React from "react";
import styles from "../hero1/hero1.module.css";
import heroImg from "../../assests/img/hero-img1.png";
import Image from "next/image";
import Button from "@/app/components/button/Button";
const Hero1 = () => {
  return (
    <>
      <div className={styles.hero_wrapper}>
        {/* Code */}
        <div className={styles.hero_section1}>
          <span className={styles.mini_title}>99.00% natural. 100% you</span>
          <h1 className={styles.title}>radiant beauty, naturally.</h1>
          <p className={styles.disc}>
            Discover the science behind naturally effective ingredients for
            transformative results
          </p>
          <Button className={styles.hero_btn} title="SHOP NOW" />
        </div>
        <div>
          <Image src={heroImg} className={styles.heroImage} alt="hero/img" />
        </div>
      </div>
    </>
  );
};

export default Hero1;
