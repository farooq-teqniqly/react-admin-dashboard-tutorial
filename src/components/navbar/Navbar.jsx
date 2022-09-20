import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon></SearchIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"></LanguageIcon>
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon"></DarkModeIcon>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon"></FullscreenExitIcon>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
            <div className="counter">4</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon"></ChatBubbleIcon>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListIcon className="icon"></ListIcon>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
