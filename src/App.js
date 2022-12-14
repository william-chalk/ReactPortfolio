import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const [categories] = useState([
    {
      name: "about me",
    },
    {
      name: "projects",
    },
    {
      name: "contact me",
    },
    {
      name: "resume",
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
