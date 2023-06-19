import React from "react";
import "./profile.css";
import profileimg from "../../assets/profileimgs/profile.jpg";
const Mediaprofile = () => {
  return (
    <>
      <div className="profile_main">
        <img
          src={profileimg}
          alt="profile photo"
          height="100px"
          width="100px"
          style={{ borderRadius: "50%" }}
        />

        <h3>Profile Name</h3>
        <h6>Profession</h6>
        <p>Write a bio about Yourself</p>
        <h5>2M Followers</h5>
        <p>user@gmail.com</p>
        <button
          style={{
            border: "1px solid blue",
            color: "blue",
            background: "none",
          }}
        >
          Edit Profile
        </button>
      </div>
    </>
  );
};
export default Mediaprofile;
