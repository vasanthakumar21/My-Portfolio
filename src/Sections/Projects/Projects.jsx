import React from "react";
import styles from "./Projects.module.css";
import blood from "../../assets/blood.png";
import boat from "../../assets/boatfinal.png";
import time from "../../assets/timefinal.png";
import to from "../../assets/todo.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projects}>
        <a href="https://github.com/vasanthakumar21/App_Development">
          <img className="hover" src={blood} />
          <h3>Blood Donation Application</h3>
        </a>
        <a href="https://github.com/vasanthakumar21/Advanced-App-development">
          <img className="hover" src={boat} />
          <h3>Boat booking Application</h3>
        </a>
        <a href="https://github.com/vasanthakumar21/App_Development">
          <img className="hover" src={time} />
          <h3>Time Sheet Management</h3>
        </a>
        <a href="https://github.com/vasanthakumar21/To-Do-List/tree/main/vite-project">
          <img className="hover" src={to} />
          <h3 className="vas">To-Do-List</h3>
        </a>
      </div>
    </section>
  );
}

export default Projects;
