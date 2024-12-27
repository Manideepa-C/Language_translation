import React from 'react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next";
import "./Header.css";
import { IoMdMenu } from "react-icons/io";
import burger from "../assets/burger.png";

const Header = () => {
  const {t} = useTranslation();
  const AppTitle = t("AppTitle");

  return (
    <>
      <div className="appHead">
        <IoMdMenu className='header_icon'/>
        <h1><img src={burger} alt="" className='logo'/> {AppTitle}</h1>
        <LanguageSelector />
      </div>
    </>
  )
}

export default Header