import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import "./Card.css";
import burger from "../assets/classic.png";
import cheese from "../assets/cheese.jpg";
import vegan from "../assets/vegan.jpg"

const Card = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const CardTitle = t("CardTitle");
    const title1 = t("card1.title");
    const desc1 = t("card1.description");

    const title2 = t("card2.title");
    const desc2 = t("card2.description");

    const title3 = t("card3.title");
    const desc3 = t("card3.description");

    const orderNow = t("translations.orderNow");
    const viewDetails = t("translations.viewDetails")

    const CardData = [
        {
            id: 1,
            image: burger,
            title: title1,
            desc: desc1,
        },
        {
            id: 2,
            image: cheese,
            title: title2,
            desc: desc2,
        },
        {
            id: 3,
            image: vegan,
            title: title3,
            desc: desc3,
        }
    ];
    const handleDetails = (card) => {
        navigate(`/details/${card.id}`, { state: { card } }); // Pass data using state
    };

    return (
        <>
            <h1>{CardTitle}</h1>
            <div className="cards">
                {CardData.map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <div className="cardImg">
                                <a href={`/details/${item.id}`}>
                                    <img src={item.image} alt="alt" />
                                </a>
                            </div>
                            <div id="content-container">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <div className="card-body">
                                    <div className="buttons">
                                        <button className='btn1'>{orderNow}</button>
                                        <button className='btn2' onClick={() => handleDetails(item)}>{viewDetails}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Card