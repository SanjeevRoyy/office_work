import React from "react";
import Button from "../../../components/Button";

const Banner = () => {
  return (
    <section className="Banner">
      <h1>Experience Store</h1>
      <article className="BannerBg">
        <div className="BannerWrapper">
          <h2>Visit our Experience Store in Sahakar Nagar, Bengaluru</h2>
          <p>
          Let our experienced team of designers and architects bring your vision to life with expert guidance and creative finesse.

          </p>
          <Button
            btnText="Locate Us"
            destination="/contact"
            variant={{ padding: "16px 60px", border: "1px solid white" }}
          />
        </div>
      </article>{" "}
    </section>
  );
};

export default Banner;
