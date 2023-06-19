import React from "react";
import "./App.css";
import Frontlander from "./components/Ex2LanderProps/mediafront";
import Follows from "./components/followlist/followers";
import Friends from "./components/friendslist/friends";
import Mediahead from "./components/HeaderContent/Header/header";
import Newslist from "./components/newscards/news";
import Mediaprofile from "./components/Profile/profile";
import Signup from "./components/Signup/signup";
import Feedcount from "./components/useReducer/feedcount";

function App() {
  return (
    <>
      <Frontlander />
      <Signup />
      <Mediahead />
      <Mediaprofile />
      <Feedcount />
      <Follows />
      <Newslist />
      <Friends />
    </>
  );
}

export default App;
