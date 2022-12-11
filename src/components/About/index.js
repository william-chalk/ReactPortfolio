import React from "react";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">My Story</h1>
      <div className="my-2">
        <p>
          Hey my name is William Chalk,{" "}
          <span>
            <a href="#projects">view my work</a>
          </span>{" "}
          below.
        </p>
      </div>
    </section>
  );
}

export default About;
