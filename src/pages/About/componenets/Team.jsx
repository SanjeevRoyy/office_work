import React from "react";

export default function Team() {
  const teams = [
    { 
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
    {
      name: "Yhazini",
      position: "Founder $ Studio Head",
    },
  ];
  return (
    <div className="SectionTeam">
      <h1 className="Heading">Our Team</h1>
      <div className="Boxes">
        {teams.map((team, index) => (
        
          <div className="Box" key={index}>
            
           
            <div className="ForBackground">
           
              <h1>{team.name}</h1>
              <p>{team.position}</p>
                         </div>
                        
          </div>
         
          
        ))}
      </div>
    </div>
  );
}
