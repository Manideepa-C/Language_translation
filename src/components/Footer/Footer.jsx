import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TbCrown } from "react-icons/tb";
import { LuBox } from "react-icons/lu";
import "./Footer.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation("footer");
    const home = t("home");
    const offers = t("offers");
    const products = t("products");
    const rewards = t("rewards");

    return (
        <div className="footer">
            <a href='/' className="footer_item">
                <MdOutlineHome className='footicon'/>
                <span className="title">{home}</span>
            </a>
            <div className="footer_item">
                <MdOutlineLocalOffer className='footicon'/>
                <span className="title">{offers}</span>
            </div>
            <a href='/products' className="footer_item">
                <LuBox className='footicon'/>
                <span className="title">{products}</span>
            </a>
            <div className="footer_item">
                <TbCrown className='footicon'/>
                <span className="title">{rewards}</span>
            </div>
        </div>
    )
}

export default Footer