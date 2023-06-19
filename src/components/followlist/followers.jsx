import React from "react";
import "./followers.css";
import rectblue from "../../assets/followimgs/blue-rect.svg";
import tick from "../../assets/followimgs/circle-tick.svg";
import chevron from "../../assets/followimgs/chevron-down.svg";
import profileimg from "../../assets/followimgs/profileimg.jpg";
const Follows = () => {
  const following = [
    {
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followbtn: "Follow",
    },
    {
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followbtn: "Follow",
    },
    {
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followbtn: "Follow",
    },
    {
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followbtn: "Follow",
    },
    {
      followimg: profileimg,
      tickimg: tick,
      followname: "William Cole",
      countfollow: "2M Followers",
      profession: "Artist,Motion Graphics",
      chatbtn: "Message",
      followbtn: "Follow",
    },
  ];
  const renderfollow = following.map((followlist, index) => {
    return (
      <>
        <div className="follow_profile">
          <img src={followlist.followimg} alt="" />
          <div className="follow_info">
            <div className="follower">
              <div className="follow_name">
                <img src={followlist.tickimg} alt="" />
                <h3>{followlist.followname}</h3>
              </div>
              <p>{followlist.countfollow}</p>
            </div>
            <p>{followlist.profession}</p>
            <div className="follow_btn">
              <button id="chat">{followlist.chatbtn}</button>
              <button id="connect">{followlist.followbtn}</button>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <React.Fragment>
      <div className="follow_main">
        <div className="follow_head">
          <img src={rectblue} alt="" />
          <h2>FOLLOW</h2>
        </div>
        {renderfollow}
        <div className="view_more">
          <a href="#">
            <img src={chevron} alt="" />
            Show more
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Follows;
