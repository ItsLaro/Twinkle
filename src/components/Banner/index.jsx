import React from "react";
import Splash from "../../splash_main.png"
import Wave from "../../curve.svg"
import styles from  "./Banner.module.css"

function Banner() {

    console.log("Jehf,", styles);

    return (
        <div>
            <div className={styles.banner}>
                <img className={styles.splash} src={Splash} alt="Our Community"/>
                <div>
                    <h1>Join Miami's Leading Tech Student Community</h1>
                    <p> Providing students of all academic background and skill leves with opportunities to develop technically and professionally</p>
                </div>
            </div>
            <div className={styles.wave}>
                <img src={Wave} />

            </div>
        </div>
    );
  }
  
export default Banner;