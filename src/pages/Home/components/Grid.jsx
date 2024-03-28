import React from "react";
import Button from "../../../components/Button";

export default function Grid() {
  const services = [
    {
      title: "Lighting Works",
      content:
        "Blending Creativity and Functionality to illuminate with styles",
      buttonText: "Know More",
      img: "/img/lighting.jpg",
    },
    {
      title: "FLooring  Works",
      content:
        "Marrying Style and Durability, Transforming Spaces With Elegance And Rracticality",
      buttonText: "Know More",
      img: "/img/flooring1.jpg",
    },
    {
      title: "Civil Works",
      content: "crafting functional and aesthetic spaces with precision",
      buttonText: "Know More",
      img: "/img/team-working.webp",
    },
    {
      title: "False Ceiling",
      content: "sophisticated and functional, adding modern flair to spaces",
      buttonText: "Know More",
      img: "/img/ceiling.jpg",
    },
    {
      title: "Wall Desing And Painting",
      content: "merging creativity with function for vibrant spaces.",
      buttonText: "Know More",
      img: "/img/wall.jpg",
    },
    {
      title: "Flooring Works",
      content: "stylish, functional, and personalized storage solutions.",
      buttonText: "Know More",
      img: "/img/flooring2.jpg",
    },
    {
      title: "Modular Wardrobes",
      content: "stylish and functional storage solutions tailored to you",
      buttonText: "Know More",
      img: "/img/wardrobe.jpg",
    },
    {
      title: "Modular Kitchen",
      content: "stylish, efficient, and space savvy culinary solutions.",
      buttonText: "Know More",
      img: "/img/kitchen.jpg",
    },
  ];
  return (
    <section className="GridSection">
      <h1 className="GridHeading">Our Services</h1>
      <section className="GridWrapper">
        {services.map((service, index) => (
          <article
            className={`GridChild Grid-${index + 1}`}
            key={index}
            style={{
              backgroundImage: `url("${service.img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="TextWrapper">
              <h3>
                {service.title}-{index}
              </h3>
              <p>{service.content}</p>
              <Button
                btnText={service.buttonText}
                variant={{ border: "1px solid white" }}
              />{" "}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
