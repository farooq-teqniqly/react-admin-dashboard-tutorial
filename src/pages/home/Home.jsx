import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        home container
      </div>
    </div>
  );
};

export default Home;
