import React from "react";
import Button from "./Button";

export default function Cards({
  highlight,
  heading,
  leftBtnText,
  leftBtnTarget,
  rightBtnText,
  rightBtnTarget,
  content,
}) {
  return (
    <section className="CardsSection">
      <figre  className="ImgLeft ImgWrapper">
       
        <h1 className="Text">
          <span>{highlight}</span>
          <br />
          {heading}
        </h1>
        <Button
          btnText={leftBtnText}
          variant={{ border: "1px solid #fff", height: "50px !important" }}
        />
      </figre>
      <figure className="ImgRight ImgWrapper">
        <p className="Text">{content}</p>
        <Button
          btnText={rightBtnText}
          variant={{ border: "1px solid #fff", height: "50px !important" }}
        />
      </figure>
    </section>
  );
}
