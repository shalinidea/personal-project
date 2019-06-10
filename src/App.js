import React from "react";
import "./App.css";
import ProjectList from "./components/ProjectList/ProjectList";
import projectItems from "./services/projectServices";

function App() {
  return (
    <div>
      <ProjectList list={projectItems} />
    </div>
  );
}

export default App;
