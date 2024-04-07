import React from "react";
import buro from "../assets/Bitmap.svg";
import buroDesktop from "../assets/BitmapDesktop.svg";
import "./Images.css";
export const Images = () => {
  return (
    <>
      <img className="buro" src={buro} alt="buro" />
      <img className="buroDesktop" src={buroDesktop} alt="buro" />
    </>
  );
};
