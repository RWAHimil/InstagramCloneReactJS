import React from "react";
import heart from "../assests/asset 31.jpg";
import comment from "../assests/asset 32.jpg";
import share from "../assests/asset 33.jpg";
import save from "../assests/asset 34.jpg";

export default function Post() {
  return (
    <>
        <div className="post">
          <div className="postInfo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYe6po911o1oL_xpqfoL0VsXaPVDe14iwgZA&s"
              alt=""
              className="postInfoImg"
            />

            <div className="postInfouserName">Rajkumar</div>
            <div className="timingInfo">. 36 min</div>
          </div>
          <div className="postImg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBU1MjptmEuDk-KnK681IW7er47kp6lK34cQ&s"
              alt=""
              className="postImage"
            />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <img src={heart} alt="" />
              <img src={comment} alt="" />
              <img src={share} alt="" />
            </div>
            <div className="rightIcon">
              <img src={save} alt="" />
            </div>
          </div>

          <div className="likeSection">
            <div className="imagesLike">
              <img
                className="likeImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYe6po911o1oL_xpqfoL0VsXaPVDe14iwgZA&s"
                alt=""
              />
              <img
                className="likeImg2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYe6po911o1oL_xpqfoL0VsXaPVDe14iwgZA&s"
                alt=""
              />
            </div>
            <div className="noOfLikes">112,456 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Yash Soni</div>
            <div className="infoComment">Happy Birthday Yash </div>
          </div>
          <div className="noOfComments">View All 467 Comments</div>
          <div className="addComment">Add a Comment...</div>
        </div>
      
    </>
  );
}
