import React from "react";
import styles from "@/app/components/footer/footer.module.css";
import {
  footerList1,
  footerList2,
  footerList3,
  footerList4,
} from "@/app/utils/content/data";
import Input from "../input/Input";
import Button from "../button/Button";
import footerArrowImg from "../../assests/img/footer-rightArrow.svg";
import Button1 from "../button/Button1";
import Image from "next/image";
import FooterBrandLogo from "../../assests/img/brand-log.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_section1}>
          <div className={styles.footer_box1}>
            {footerList1.map((item, i) => (
              <>
                <ul key={i} className={styles.footerList_Group}>
                  <li className={styles.footerListTitle}>{item.title}</li>
                  <li className={styles.footerListsSubtitle}>{item.list}</li>
                </ul>
              </>
            ))}
          </div>
          <div className={styles.footer_box1}>
            {footerList2.map((item, i) => (
              <>
                <ul key={i} className={styles.footerList_Group}>
                  <li className={styles.footerListTitle}>{item.title}</li>
                  <li className={styles.footerListsSubtitle}>{item.list}</li>
                </ul>
              </>
            ))}
          </div>
          <div className={styles.footer_box1}>
            {footerList3.map((item, i) => (
              <>
                <ul key={i} className={styles.footerList_Group}>
                  <li className={styles.footerListTitle}>{item.title}</li>
                  <li className={styles.footerListsSubtitle}>{item.list}</li>
                </ul>
              </>
            ))}
          </div>
          <div>
            {footerList4.map((item, i) => (
              <>
                <div key={i} className={styles.footer_box1}>
                  <h2 className={styles.footerListTitle}>{item.title}</h2>
                  <div className={styles.footerIcon}>
                    <Image src={item.icon1} />
                    <Image src={item.icon2} />
                    <Image src={item.icon3} />
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className={styles.footer_box2}>
            <Image src={FooterBrandLogo} className={styles.footerStyleImg} />
            <p className={styles.footer_boxDisc}>
              Discover the science behind naturally effective ingredients for
              transformative results
            </p>
            <div className={styles.footer_subBox}>
              <Input
                type="email"
                placeholder="Email address"
                className={styles.footer_input}
              />
              <Button1 className={styles.footer_SubBtn} src={footerArrowImg} />
            </div>
          </div>
        </div>
        <div className={styles.footer_section2}>
          Copyright ©2023 - All rights reserved. Made by Ahmed Faraz
        </div>
      </div>
    </>
  );
};

export default Footer;
