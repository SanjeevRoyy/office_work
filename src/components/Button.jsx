import React from "react";
import { Link } from "react-router-dom";

export default function Button({ btnText, destination, variant }) {
  return (
    <button className="Button">
      <Link to={destination} className="BtnLink" style={variant}>
        {btnText}
      </Link>
    </button>
  );
}
