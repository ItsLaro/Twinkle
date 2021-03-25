import React from "react";
import Wave from "./curve.svg";
import styles from  "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className={styles.wave}>
        <img src={Wave} />
      </div>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
