import React from "react";
import Splash from "./splash.png";
import Wave from "./curve.svg";
import styles from  "./Banner.module.css";

function Banner() {
    return (
        <div>
            <div className={styles.sectionContainer}>
                <div className={styles.banner}>
                    <div className={styles.imageContainer}>
                        <img className={styles.splash} src={Splash} alt="Our Community"/>
                    </div>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.mainHeader}>Join the Leading Student Tech Community in Miami!</h1>
                        <p className={styles.mainSubheader}> 
                            A large tech-based community that aims to provide every student with the opportunity to develop professionally and technically. 
                            All majors and skill levels are welcomed!
                        </p>
                        <div className={styles.buttonsContainer}>
                            <button> Events </button>
                            <button> Discord </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wave} unselectable="on">
                    <img src={Wave} />
            </div>
        </div>
    );
}
  
export default Banner;