import React, { useContext } from "react";
import { getClass } from "../utils";
import Image from "../components/Image";
import { Context } from "../Context";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className={getClass(index)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
