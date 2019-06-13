import React from "react";
import "./ProjectGalleries.css";

const ProjectGalleries = props => {
  const imgstyle = { width: 600, height: 400 };
  return (
    <div className="flex-container">
      {props.list2.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt="" style={imgstyle} />
          <div className="container">
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGalleries;
