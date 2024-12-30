import styles from "./Hero.module.css";

import heroImg from "../../assets/piv.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterlight from "../../assets/twitter-light.svg";
import twitterdark from "../../assets/twitter-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import Linkedinlight from "../../assets/linkedin-light.svg";
import Linkedindark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";

import React from "react";
import { useTheme } from "../../Common/themeContext";

function Hero() {
  const { theme, toggletheme } = useTheme();

  const themeIcon=theme==="light" ? sun:moon; 
  const twitterIcon=theme==="light" ? twitterlight:twitterdark; 
  const githubIcon=theme==="light" ? githublight: githubdark; 
  const LinkedinIcon=theme==="light" ? Linkedinlight:Linkedindark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of vasanthakumar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggletheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Vasanthakumar S</h1>
        <h2>Final-Year Engineer | Coding for Impact</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/vasanthakumar21" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/vasanth-kumar-0b8730250/" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          {" "}
          A passionate and dedicated B.Tech IT student at
          Sri Krishna College of Technology, specializing in front-end
          development. With a strong foundation in programming and a deep
          interest in technology..
        </p>
        <a href={cv}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
