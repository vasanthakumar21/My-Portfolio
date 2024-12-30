import React from 'react'
import styles from "./SkillsStyles.module.css"
import light from "../../assets/checkmark-light.svg"
import dark from "../../assets/checkmark-dark.svg"

import { useTheme } from "../../Common/themeContext";

function Skills() {
  const { theme} = useTheme();

  const checkMarkIcon=theme=='light'?light:dark;
  return (
    <section id="skills" className={styles.container}>
    <br/>
    <br/>
    <br/>
    <br/>
        <h1> Skills</h1>
        <br/>
        <div className={styles.skillLists}>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>java</p>
        </span>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>javaScript</p>
        </span>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>Html</p>
        </span>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>css</p>
        </span>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>MySql</p>
        </span>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>Git</p>
        </span>
        <span> 
        <img src={checkMarkIcon} alt='Checkmark icon'/>
        <p>Aws</p>
        </span>
         </div>
    </section>
  )
}

export default Skills