import React from "react";
import "./Home.css";
import Calls from "../Calls/Calls";

const Home = () => {
  return (
    <div className="container_home">
      <div className="container_home_title">
        <h6>Dati Transazione Blockchain Cardano</h6>
      </div>
      <div className="container_home_data">
        <Calls />
      </div>
    </div>
  );
};

export default Home;
