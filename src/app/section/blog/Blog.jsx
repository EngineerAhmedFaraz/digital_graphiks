import React from "react";
import styles from "@/app/section/blog/blog.module.css";
import { blogData } from "@/app/utils/content/data";
import Card3 from "@/app/components/cards/card3/Card3";
import Button from "@/app/components/button/Button";

const Blog = () => {
  return (
    <>
      <div className={styles.blog_wrapper}>
        <div className={styles.blog_section1}>
          <h2 className={styles.blog_title}>BLOG ARTICLES</h2>
          <Button className={styles.blog_btn} title="VISIT BLOG" />
        </div>
        <div className={styles.blogCard_group}>
          {blogData.map((item, i) => (
            <Card3 key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
