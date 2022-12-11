import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  const categories = useState([
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
      <Nav
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        categories={categories}
      ></Nav>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
