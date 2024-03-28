import React from "react";

export default function Process() {
  return (
    <div className="SectionProcess">
      <h1 className="Heading">Our Four Steps Process</h1>
      <div className="Body">
        <figure className="ImgWrapper">
          <img src="/img/step5.webp" />
        </figure>
        <div className="Dream Block">
          <h2>Consultation</h2>
          <p>
          Discuss your needs and preferences.
          </p>
        </div>

        <div className="Design Block">
          <h2>Design Proposal</h2>
          <p>Present a design proposal based on the consultation.</p>
        </div>
        <div className="Execute Block">
          <h2>Execution</h2>
          <p>
          Procure materials and handle installation.
          </p>
        </div>

        <div className="Deliver Block">
          <h2>Completion</h2>
          <p>
          Deliver the transformed space with quality workmanship.
          </p>
        </div>
      </div>
    </div>
  );
}
