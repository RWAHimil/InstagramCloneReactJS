import React from "react";
import "./middleSide.css";
import story from "../story.json";
import Post from "./Post";

export default function MiddleSide() {
  const story1 = story.story;
  console.log(story1);

  return (
    <div className="middleSide">
      <div className="storySide">
        {story1.map((item, index) => (
          <div className="storyParticular" key={index}>
            <div className="imgDiv">
              <img src={item.img} className="statusImg" alt="" />
            </div>
            <div className="profileName">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="postSection">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
