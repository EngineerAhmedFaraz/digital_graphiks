import React from "react";
import styles from "../navbar/Navbar.module.css";
import { navIcon, navList1, navList2 } from "../../utils/content/data.js";
import Image from "next/image";
import Button from "../button/Button";
import brandImg from "../../assests/img/brand-log.png";
import Button1 from "../button/Button1";
import navImg1 from "../../assests/img/nav-icon1.png";
import navImg2 from "../../assests/img/nav-icon2.png";
import navImg3 from "../../assests/img/nav-icon3.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.nav_item}>
          {navList1.map((item, i) => (
            <li className={styles.nav_list} key={i}>
              {item.title}
            </li>
          ))}
        </ul>

        <div>
          <Image src={brandImg} className={styles.brandLogo} alt="brand/img" />
        </div>
        <div className={styles.nav_section}>
          <ul className={styles.nav_item}>
            {navList2.map((item, i) => (
              <li className={styles.nav_list} key={i}>
                {item.title}
              </li>
            ))}
          </ul>
          <div className={styles.navImgGroup}>
            <Image
              src={navImg1}
              className={styles.navImgICon}
              alt="nav_img/icon"
            />
            <Image
              src={navImg2}
              className={styles.navImgICon}
              alt="nav_img/icon"
            />
            <Image
              src={navImg3}
              className={styles.navImgICon}
              alt="nav_img/icon"
            />
          </div>
        </div>
        <GiHamburgerMenu className={styles.hamburgerMenu} />
      </div>
    </>
  );
};

export default Navbar;
