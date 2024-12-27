import React from 'react';
import "./About.css";
import burger from "../assets/burger.png";
import { useTranslation } from 'react-i18next';

const About = () => {
    const {t} = useTranslation("about");
    const AboutText = t("About")
 
  return (
    <>
    <div className="about_card">
        <img src={burger} alt="" />
        <p>{AboutText}</p>
    </div>
    </>
  )
}

export default About