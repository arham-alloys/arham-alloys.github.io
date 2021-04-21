import React, { useState } from "react";

const AssociateImg = ({ img1, img2 }) => {
  const [imgSrc, setImgSrc] = useState(img1);

  const mouseOver = () => {
    setImgSrc(img2);
  };

  const mouseLeave = () => {
    setImgSrc(img1);
  };

  return (
    <img
      src={imgSrc}
      alt=""
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
      className="img-fluid w-25"
    />
  );
};

export default AssociateImg;
