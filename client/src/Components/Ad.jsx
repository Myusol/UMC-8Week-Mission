import React from "react";
import Ad_img from "./img/Ad_img.svg";

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div >
      <img
        src={Ad_img}
        alt="광고 배너"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Ad;
