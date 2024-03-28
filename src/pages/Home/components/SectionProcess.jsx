import React from "react";

const dataArray = [
  {
    name: "Meet a  designer",
    img: "/img/Icons-05.png",
  },
  {
    name: "Advance Payment",
    img: "/img/Icons-06.png",
  },
  {
    name: "Partial Payment",
    img: "/img/Icons-07.png",
  },
  {
    name: "Full Payment",
    img: "/img/Icons-08.png",
  },
  {
    name: "Move In and Enjoy",
    img: "/img/Icons-05.png",
  },
];
const SectionProcess = () => {
  return (
    <div className="Section-Part">
      <h1 className="MarginHeader"> Our Process</h1>

      <div className="ContainerMain">
        {dataArray.map((data, index) => (
          <article className="Block" key={index}>
            <figure className="ImgWrapper">
              <img src={data.img} alt="" />
            </figure>
            <h3 className>{data.name}</h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SectionProcess;
