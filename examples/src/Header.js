import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="brand">
          <h1>ReactInputPosition</h1>
        </div>
        <div className="logos">
          <a href="https://github.com/adamrisberg/react-input-position">
            <img src={require("./github-logo.png").default} alt="Github Logo" />
          </a>
          <a href="https://www.npmjs.com/package/react-input-position">
            <img src={require("./npm-logo.png").default} alt="NPM Logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
