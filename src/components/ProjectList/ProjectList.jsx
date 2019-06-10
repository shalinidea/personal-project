import React from "react";
import "./ProjectList.css";

const ProjectList = props => {
  const imgstyle = { width: "50%" };
  return (
    <div className="flex-container">
      {props.list.map((item, index) => (
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

export default ProjectList;
