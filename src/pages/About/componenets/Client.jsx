import React from "react";

export default function Client() {
  const logos = [
    { img: "Logo" },
    { img: "Logo" },
    { img: "Logo" },
    { img: "Logo" },
  ];
  return (
    <div className="SectionClient">
      <h1 className="Heading">Our Clients</h1>
      <div className="CircleClients">
        {logos.map((logo, index) => (
          <figure index={index} className="ClientLogo">
            <img src={`/img/headshot${index + 1}.webp`} />
          </figure>
        ))}
      </div>
    </div>
  );
}
