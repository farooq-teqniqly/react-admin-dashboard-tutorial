import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LamaAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"></DashboardIcon>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon"></PersonIcon>
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className="icon"></InventoryIcon>
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon"></ShoppingCartIcon>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"></LocalShippingIcon>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"></QueryStatsIcon>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"></NotificationsIcon>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <HealthAndSafetyIcon className="icon"></HealthAndSafetyIcon>
            <span>System Health</span>
          </li>
          <li>
            <MonitorHeartIcon className="icon"></MonitorHeartIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"></SettingsIcon>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className="icon"></AccountBoxIcon>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"></LogoutIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
