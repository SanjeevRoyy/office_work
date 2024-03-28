import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

const ImgSlider = () => {
  const loveLetters = [
    {
      name: "Mrs Shilpa",
      content:
        "If I had to choose one word to describe Artyss Design Studio, it would be 'Exceptional.' Always on time, responsive, conscientious, and effortlessly easy to work with. I am in awe of their design abilities and seamless coordination skills. Special thanks to Yashas, the Principal Designer, for her meticulous attention to detail in every aspect of the design process. Alongside their lovely, super polite, and professional team, Artyss Design Studio truly brings dreams to life.",
      img: "/img/loveletter",
    },
    {
      name: "Mrs Priya & Family ",
      content:
        "From the very beginning, Artyss Design Studio showcased unparalleled professionalism. I was thoroughly impressed by their designs and attention to detail. Their unique approach of working backwards, prioritizing the client's budget without compromising on quality, was truly commendable. A random visit to the studio left me completely impressed by the team's expertise and approach. Kudos to the entire company, and I look forward to a wonderful collaboration for our upcoming apartment interiors.",
      img: "/img/loveletter",
    },
    {
      name: "Mr & Mrs Murali",
      content:
        "Working with Artyss has been an absolute pleasure! They perfectly captured my vision for my dream space and meticulously attended to every detail throughout the planning and execution process. I am constantly receiving compliments on the color themes, kitchen design, and kids' room decor in my house, all thanks to Artyss's exceptional work. I highly recommend them to anyone in need of interior design services.        ",
      img: "/img/loveletter",
    }
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button id="Next" onClick={onClick}>
        <GrNext />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button id="Prev" onClick={onClick}>
        <GrPrevious />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="SliderSection">
        <h2 className="SliderHeading">Love Letters</h2>
        <div className="SlideWrapper">
          <Slider {...settings}>
            {loveLetters.map((loveLetter, index) => (
              <article key={index} className="Slide">
                <figure className="ImgWrapper">
                  <img src={`${loveLetter.img}${index + 1}.jpg`} />
                </figure>
                <h3>{loveLetter.name}</h3>
                <p>{loveLetter.content}</p>
              </article>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ImgSlider;
