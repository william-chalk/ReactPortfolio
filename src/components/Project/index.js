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
    {
      name: "Git it Done",
      description: "Site where a end user can search for GitHub repos",
      github: "https://github.com/william-chalk/git-it-done",
      live: "https://william-chalk.github.io/git-it-done/",
    },
    {
      name: "Taskinator",
      description:
        "Site where a user can keep track of tasks and mark them as In Progress, and Completed",
      github: "https://github.com/william-chalk/taskinator",
      live: "https://william-chalk.github.io/taskinator/",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, index) => [
          <div className="container">
            <div className="card my-2">
              <img
                src={require(`../../assets/${index}.JPG`)}
                alt={project.name}
                className="img-thumbnail"
                key={"f" + project.name}
              />
              <p className="my-3">{project.description}</p>
              <a className="mx-2" href={project.github} alt={project.github}>
                GitHub
              </a>
              <a href={project.live} alt={project.github}>
                Live
              </a>
            </div>
          </div>,
        ])}
      </div>
    </div>
  );
}

export default Projects;
