// src/App.jsx
import "./App.css";
import logo from "./assets/discord-logo-white.png";
import icon from "./assets/menu-icon.png";
import image from "./assets/discord-background.png";

function navbar() {
  return (
    <section>
      <navbar id="navbar">
        <img src={logo} className="logo"></img>
        <img src={icon} className="icon"></img>
      </navbar>
      <div id="text-buttons">
        <h1 id="title">IMAGINE A PLACE...</h1>
        <p id="paragraph">
          ... where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button id="mac-button">Download for Mac</button>
        <button id="discord-button"> Open Discord in your browser</button>
      </div>
      <div id="image">
        <img id="image-src" src={image}></img>
      </div>
    </section>
  );
}

export default navbar;
