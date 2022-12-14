import React from "react";
import PageContent from "../Page Content";
import About from "../About";
// import Project from "../Project";
//add contact
//add resume

function Page({ currentCategory }) {
  const renderCategory = () => {
    switch (currentCategory.name) {
      case "about me":
        return <About />;
      //   case "projects":
      //     return <Project />;
      //add contact
      //add resume
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
