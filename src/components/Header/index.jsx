import React from "react";
import Logo from "./Greek-Logo.png"
import styles from  "./Header.module.css"

function Header() {
  return (
    <header>
      <img src={Logo} alt="Upsilon Pi Epsilon"/>
    </header>
  );
}

export default Header;
