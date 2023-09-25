import React from "react";
import styles from "@/app/section/banner/banner.module.css";
import Image from "next/image";
import bannerImg from "../../assests/img/hero-img2.png";
import Button from "@/app/components/button/Button";
import { companyLogo } from "@/app/utils/content/data";

const Banner = () => {
  return (
    <>
      <div className={styles.banner_wrapper}>
        <div className={styles.banner_container}>
          <Image
            src={bannerImg}
            className={styles.bannerImage}
            alt="banner/img"
          />
          <div className={styles.banner_body}>
            <div className={styles.banner_section}>
              <span className={styles.mini_title}>RISE AND SHINE</span>
              <h1 className={styles.title}>MORNING ROUTINE ESSENTIALS</h1>
              <Button className={styles.banner_btn} title="SHOP NOW" />
            </div>
          </div>
        </div>
        <div className={styles.company_logo}>
          {companyLogo.map((item, i) => (
            <div key={i} className={styles.company_box}>
              <Image
                src={item.img}
                className={styles.company_img}
                alt="company/img"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
