import React, { useState } from "react";

function Projects() {
  const [projects] = useState([
    //create array of project objects
    //{name,des,deploy,repo,img route}
    {
      name: "Ultimate Sports Tracker",
      description:
        "Team project that give the end user an option to bring up stats and scores for their favorite basketball team",
      github: "https://github.com/hartsfieldt/project1-sportsstats",
      live: "https://hartsfieldt.github.io/project1-sportsstats/",
    },
    {
      name: "Run Buddy",
      description: "Fitness site for end users to sign up",
      github: "https://github.com/william-chalk/run-buddy",
      live: "https://william-chalk.github.io/run-buddy/",
    },
    // {
    //   name: "Git it Done",
    //   description: "Site where a end user can search for repos",
    //   github: "https://github.com/william-chalk/git-it-done",
    //   live: "https://william-chalk.github.io/git-it-done/",
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, index) => (
          <img
            src={require(`../../assets/${index}.JPG`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={"f" + project.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
