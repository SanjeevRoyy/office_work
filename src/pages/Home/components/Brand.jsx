import React from "react";

const brands = [
  {
    title: "Brand Logo",
    name: "Apple",
  },
  {
    title: "Brand Logo",
    name: "Samsung",
  },
  {
    title: "Brand Logo",
    name: "Brand Name 3",
  },
  {
    title: "Brand Logo",
    name: "Brand Name 4",
  },
  {
    title: "Brand Logo",
    name: "Brand Name 5",
  },
];

const Brand = () => {
  return (
    <div className="BrandSection">
      <h2> Our Brand Partners</h2>
      <div className="BrandWrapper">
        {brands.map((brand, index) => (
          <article key={index} className="BrandElement">
            <figure className="BrandImg">
             
            </figure>
            <p className="BrandName">{brand.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Brand;
