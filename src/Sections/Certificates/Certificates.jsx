import React from "react";
import styles from "./CertficateStyles.module.css";
import dark from "../../assets/checkmark-dark.svg";
import light from "../../assets/checkmark-light.svg";
import { useTheme } from "../../Common/themeContext";

function Certificates() {
  const {theme}=useTheme();

  const clk=theme=="light"?light:dark;
  return (
    <section className={styles.container}>
      <br />
      <br />
      <br />
      <h1> Certificates </h1>
      <br/>
      <br/>

      <div className={styles.certificates}>
        <span>
          <img src={clk} />
          <p> ReactJS Essential Training</p>
        </span>
        <br/>

        <span>
          <img src={clk} />
          <p> Amazon ElasticBlock Store (AWS)</p>
        </span>
        <br/>
        <span>
          <img src={clk} />
          <p> BasicsofJava-Introductory Course</p>
        </span>
      </div>
    </section>
  );
}

export default Certificates;
