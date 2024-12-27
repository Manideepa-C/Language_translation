import React from 'react';
import pizzaImg from "../assets/pizza.jpg";
import tacosImg from "../assets/tacos.jpg";
import shawarmaImg from "../assets/shawarma.jpg";
import fcImg from "../assets/friedchicken.jpg";
import "./About.css";
import { useTranslation } from 'react-i18next';

const ComingSoon = () => {
    const { t } = useTranslation("comingSoon");
    const comingSoon = t("comingSoon");
    const pizza = t("pizza.title");
    const taco = t("taco.title");
    const shawarma = t("shawarma.title");
    const friedChicken = t("friedChicken.title");
    return (
        <div className='cmgSoon'>
            <h1>{comingSoon}</h1>
            <div className="cmg_cards">
                <a href='/item/pizza' className="cmg_card">
                    <img src={pizzaImg} alt="" />
                    <h3>{pizza}</h3>
                </a>
                <a href='/item/taco' className="cmg_card">
                    <img src={tacosImg} alt="" />
                    <h3>{taco}</h3>
                </a>
                <a href='/item/shawarma' className="cmg_card">
                    <img src={shawarmaImg} alt="" />
                    <h3>{shawarma}</h3>
                </a>
                <a href='/item/friedChicken' className="cmg_card">
                    <img src={fcImg} alt="" />
                    <h3>{friedChicken}</h3>
                </a>
            </div>
        </div>
    )
}

export default ComingSoon