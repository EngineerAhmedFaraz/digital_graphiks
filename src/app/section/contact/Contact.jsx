import React from "react";
import styles from "../contact/contact.module.css";
import Image from "next/image";
import contactImg from "../../assests/img/contact-img.png";
import contact_call from "../../assests/img/contact_call.svg";
import contact_loc1 from "../../assests/img/contact_Loc.svg";

const Contact = () => {
  return (
    <>
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_container}>
          <div className={styles.contact_section}>
            <h1 className={styles.contact_title}>contact now</h1>
            <div className={styles.contact_box}>
              <p className={styles.contact_subtitle1}>
                location: abc road street 14
              </p>
              <p className={styles.contact_subtitle1}>
                Mon-Sat: 10am-8pmSunday: Closed
              </p>
            </div>
            <div className={styles.contact_miniBox}>
              <div className={styles.contact_miniBox1}>
                <Image src={contact_loc1} alt="location/img" />
                <p className={styles.contact_minititle1}>Direction</p>
              </div>
              <div className={styles.contact_miniBox2}>
                <Image src={contact_call} alt="call/img" />
                <p className={styles.contact_minititle1}>+971 123 432 2322</p>
              </div>
            </div>
          </div>
          <Image
            src={contactImg}
            className={styles.contactImg}
            alt="contact/img"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
