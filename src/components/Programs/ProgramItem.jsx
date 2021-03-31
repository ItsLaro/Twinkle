import React from "react";
import styles from  "./Programs.module.css";

function ProgramItem(props) {
  return (
    <div>
      <button className={styles.programButton}>
         <img className={styles.programImage} src={props.image} alt={props.title}/>
      </button>
    </div>
  );
}

export default ProgramItem;