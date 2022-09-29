import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
  return (
    <div className="list">
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        datatable here
      </div>
    </div>
  );
};

export default List;
