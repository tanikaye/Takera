import React from "react";
import Search from "./Search";

function Header({ onSearch }) {
  return (
    <header>
      <h1 className="takera">
        <span className="logo" role="img">
          ☮
        </span>
        Takera
      </h1>
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;