import Image from "next/image";
import React from "react";

const Button1 = ({ src, className, alt }) => {
  return (
    <>
      <button className={className}>
        <Image src={src} alt={alt} />
      </button>
    </>
  );
};

export default Button1;
