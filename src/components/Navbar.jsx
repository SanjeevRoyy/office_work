import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import Button from "./Button";
import Logo from '../../wireframe/name.png'

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const[color, setColor] = useState(false);

  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  const navRef = useRef();

  useEffect(() => {
    if (navRef.current) {
      if (isNavActive) {
        console.log("first ");
        navRef.current.classList.add("active");
      } else {
        navRef.current.classList.remove("active");
      }
    }
  }, [isNavActive]);

  const toggleNav = () => {
    setIsNavActive((current) => !current);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  return (
    <header className={color ? 'Navbar navhero': 'Navbar'}>
      <div className="Logo">
        <img className="logoImage" src={Logo} />
      </div>
      <nav className="NavBody" ref={navRef}>
        <div className="NavWrapper">
          <NavLink className="NavLink" to="/" onClick={closeNav}>
            Home
          </NavLink>
          <NavLink className="NavLink" to="/about" onClick={closeNav}>
            About
          </NavLink>
          <NavLink to="https://artyss.in/blog/" className="NavLink" onClick={closeNav}>
            Blog
          </NavLink>
          <NavLink to="/portfolio" className="NavLink" onClick={closeNav}>
            Portfolio
          </NavLink>

          <div className="BtnWrapper" onClick={closeNav}>
          <Button
            destination="/contact"
            btnText="Contact Us"
            variant={{ padding: "10px 38px" }}
          />
        </div>
        </div>
        
      </nav>

      <div className="Hamburger" onClick={toggleNav}>
        <CgMenuRight />
      </div>
    </header>
  );
}
