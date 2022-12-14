import React, { useEffect } from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        {categories.map((category) => (
          <li
            className={`mx-1 ${
              currentCategory.name === category.name && "navActive"
            }`}
            key={category.name}
          >
            <span
              id={category.name}
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
