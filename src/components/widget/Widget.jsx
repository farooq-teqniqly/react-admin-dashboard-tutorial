import React from "react";
import "./widget.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function Widget({ type }) {
  let data;

  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <PersonIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2" }}
          ></PersonIcon>
        ),
      };
      break;

    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "Show all orders",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2",
            }}
          ></ShoppingCartIcon>
        ),
      };
      break;

    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See net earnings",
        icon: (
          <AttachMoneyIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2" }}
          ></AttachMoneyIcon>
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See balance details",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2",
            }}
          ></AccountBalanceIcon>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowUpwardIcon></ArrowUpwardIcon> {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
