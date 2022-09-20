import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        <div className="widgets">
          <Widget type="users"></Widget>
          <Widget type="orders"></Widget>
          <Widget type="earnings"></Widget>
          <Widget type="balance"></Widget>
        </div>
      </div>
    </div>
  );
};

export default Home;
