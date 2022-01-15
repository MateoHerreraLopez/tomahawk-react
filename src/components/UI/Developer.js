import React, { useState } from "react";
import classes from "./Developer.module.css";

const Developer = () => {
  const [hideLinkendIn, setHideLinkedIn] = useState(false);
  const [hideGithub, setHideGithub] = useState(false);

  const handleSocialLink = (social) => {
    social === "linkedin"
      ? window.open(
          "https://www.linkedin.com/in/mateo-herrera-lopez/",
          "_blank"
        )
      : window.open("https://github.com/MateoHerreraLopez", "_blank");
  };
  return (
    <div className={classes.developer}>
      <h1>Mateo Herrera L.</h1>
      <div
        className={classes.linkedin}
        onClick={() => handleSocialLink("linkedin")}
        onMouseOver={() => setHideLinkedIn(true)}
        onMouseLeave={() => setHideLinkedIn(false)}
      >
        {hideLinkendIn && <p>LinkedIn</p>}
      </div>
      <div
        className={classes.github}
        onClick={() => handleSocialLink("github")}
        onMouseOver={() => setHideGithub(true)}
        onMouseLeave={() => setHideGithub(false)}
      >
        {hideGithub && <p>Github</p>}
      </div>
    </div>
  );
};

export default Developer;
