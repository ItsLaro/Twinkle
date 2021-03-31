import React from "react";
import Wave from "./curve.svg";
import styles from  "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <img className={styles.wave} src={Wave} />
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
