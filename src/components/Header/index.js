import React from "react";

function Header(props) {
  return (
    <header>
      <h1 className="mx-2">William Chalk's Portfolio</h1>
      {props.children}
    </header>
  );
}

export default Header;
