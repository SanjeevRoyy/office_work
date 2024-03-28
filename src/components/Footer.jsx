import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Form from "./Form";

const Footer = () => {
  return (
    <>
      <footer className="MainFoter">
        <div className="Footer">
          <figure className="LogoWrapper">
            <img className="LogoImg" src="/img/logo.jpeg" alt="logo" />
          </figure>

          <div className="FooterContainer">
          <div className="Location">
            <h1>Location</h1>
            <p>
              Artyss Experience center,
              <br />
              #533,2nd floor,
              <br /> Skanda Arcade,14th Cross
              <br />
              Rd,F Block, Shakar Nagar, 
              <br/>
              Byatarayanpura,
              <br/>
              Bengaluru, Karnataka
              <br />
              560092
              <br />
              <br/>
              +91 976543210
              <br />
              artyss@gmail.com
            </p>
            <div className="SocialIcons">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div className="FooterLinks">
            <Link className="Linked" to="/">
              Home
            </Link>
            <Link className="Linked" to="/about">
              About Us
            </Link>
            <Link className="Linked" to="/Contact">
              Contact Us
            </Link>
            <Link className="Linked" to="/blogs">
              Blog
            </Link>
            <Link className="Linked" to="/portfolio">
              Portfolio
            </Link>
            <Link className="Linked" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="Linked" to="/terms">
              Terms & Conditions
            </Link>
          </div>
          </div>
          <div className="FormWrapper">
            <Form />
          </div>
        </div>

        <div className="footerlast">
        <p className="SubText">Website Designed by Murrad Creatives & Co.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
