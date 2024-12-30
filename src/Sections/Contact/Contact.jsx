import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section className={styles.container}>
    <br/>
    <br/>
    <br/>
    <br/>

      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          {/* <label htmlFor="name">Name </label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
        </div>
        <div className="formGroup">
          {/* <label htmlFor="email">Email </label> */}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>
        <div className="formGroup">
          {/* <label htmlFor="message">Message </label> */}
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="leave a message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit"/>
      </form>
    </section>
  );
}

export default Contact;
