import React from "react";
import resume from "../../assets/resume/williamChalkResume.pdf";
function Resume() {
  return (
    <section>
      <h1>
        You can download my{" "}
        <a href={resume} download>
          resume
        </a>{" "}
        feel free to contact me!
      </h1>
    </section>
  );
}

export default Resume;
