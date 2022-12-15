import React from "react";
import PageContent from "../Page Content";
import About from "../About";
import Project from "../Project";
import Contact from "../Footer";
import Resume from "../Resume";

function Page({ currentCategory }) {
  const renderCategory = () => {
    switch (currentCategory.name) {
      case "About Me":
        return <About />;
      case "Projects":
        return <Project />;
      case "Contact Me":
        return <Contact/>;
      case "Resume":
        return <Resume/>;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentCategory.name}</h2>
      <PageContent>{renderCategory()}</PageContent>
    </section>
  );
}

export default Page;
