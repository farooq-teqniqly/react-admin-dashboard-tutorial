import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"></MoreVertIcon>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text={70}
            strokeWidth="5"
          ></CircularProgressbar>
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">$420</p>
        <p className="description">
          There may be pending transactions that are not reflected in the above
          total.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <div className="resultAmount">$12.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
