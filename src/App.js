import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const [categories] = useState([
    {
      name: "About Me",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact Me",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header>
        <Nav
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          categories={categories}
        ></Nav>
      </Header>
      <main>
        <Page currentCategory={currentCategory}></Page>
      </main>
      {/* footer */}
    </div>
  );
}

export default App;
