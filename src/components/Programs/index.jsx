import React from "react";
import ProgramItem from "./ProgramItem.jsx"
import programsList from "./programs_list.js"
import styles from  "./Programs.module.css";

function Programs() {
    return (
        <div>
            <h1>Our Programs</h1>
            <div className={styles.sectionContainer}>   
                <div className={styles.programItemsContainer}>
                    {programsList.map((program, index) => (
                        <ProgramItem key={index} id={index} title={program.anem} content={program.name} image={program.image}/>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Programs;