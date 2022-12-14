import React, { useState } from "react";
import Project from "../Project";

function Projects() {
  const [projects] = useState([
    //create array of project objects
    //{name,des,deploy,repo,img route}
  ]);

  return (
    <div>
      <div>
        {projects.map((project, index) => (
          <Project project={project} key={"Project" + index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
