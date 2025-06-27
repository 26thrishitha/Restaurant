import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Food lovers with tech brains - we blend flavor and Development with equal passion.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>
                  <a
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-link"
                  >
                    {element.name}
                  </a>
                </h3>
                 <p className="designation">{element.designation}</p>
                 <p className="description">{element.description}</p> {/* updated line */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
