import React from "react";
import Header from "./Header/index";
import Banner from "./Banner/index";
import Events from "./Upcoming/index";
import About from "./About/index";
import Benefits from "./Benefits/index";
import Programs from "./Programs/index";
import Sponsors from "./Sponsors/index";
import Footer from "./Footer/index";
import styles from "../styles/index.css"

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Events/>
      <About/>
      <Benefits/>
      <Programs/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
