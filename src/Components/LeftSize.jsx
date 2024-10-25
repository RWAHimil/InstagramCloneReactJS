import React from "react";
import instaLogo from "../assests/logo.jpg";
import "./leftSide.css";
import Home from "../assests/asset 41.jpg";
import Search from "../assests/asset 42.jpg";
import Explore from "../assests/asset 43.jpg";
import Reels from "../assests/asset 44.jpg";
import Messages from "../assests/asset 45.jpg";
import Notification from "../assests/asset 46.jpg";
import Create from "../assests/asset 47.jpg";
import Profile from "../assests/profileImg.jpg";
import Thread from "../assests/asset 48.jpg";
import More from "../assests/asset 50.jpg";

export default function LeftSize() {
  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <img src={instaLogo} alt="insta-logo" className="logoImg" />
      </div>

      <div className="navLinkPart">
        <div className="navLink">
          <img src={Home} alt="" />
          <div className="navName">Home</div>
        </div>
        <div className="navLink">
          <img src={Search} alt="" />
          <div className="navName">Search</div>
        </div>
        <div className="navLink">
          <img src={Explore} alt="" />
          <div className="navName">Explore</div>
        </div>
        <div className="navLink">
          <img src={Reels} alt="" />
          <div className="navName">Reels</div>
        </div>
        <div className="navLink">
          <img src={Messages} alt="" />
          <div className="navName">Messages</div>
        </div>
        <div className="navLink">
          <img src={Notification} alt="" />
          <div className="navName">Notifications</div>
        </div>
        <div className="navLink">
          <img src={Create} alt="" />
          <div className="navName">Create</div>
        </div>
        <div className="navLink">
          <img src={Profile} alt="" className="img-profile" />
          <div className="navName">Profile</div>
        </div>

        <div className="below-part">
          <div className="navLink">
            <img src={Thread} alt="" className="img-profile" />
            <div className="navName">Thread</div>
          </div>
          <div className="navLink">
            <img src={More} alt="" className="img-profile" />
            <div className="navName">More</div>
          </div>
        </div>
      </div>
    </div>
  );
}
