import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./BurgerDetails.css";
import burger from "../assets/classic.png";
import cheese from "../assets/cheese.jpg";
import vegan from "../assets/vegan.jpg";

const BurgerDetails = () => {
    const { id } = useParams(); 
    const { t } = useTranslation();

    const title1 = t("card1.title");
    const desc1 = t("card1.description");
    const para1 = t("card1.paragraph");

    const title2 = t("card2.title");
    const desc2 = t("card2.description");
    const para2 = t("card2.paragraph");

    const title3 = t("card3.title");
    const desc3 = t("card3.description");
    const para3 = t("card3.paragraph");

    const orderNow = t("translations.orderNow");
    const priceAmount = t("price");

    const CardData = [
        {
            id: 1,
            image: burger,
            title: title1,
            desc: desc1,
            para: para1,
            price: "200",
        },
        {
            id: 2,
            image: cheese,
            title: title2,
            desc: desc2,
            para: para2,
            price: "230",
        },
        {
            id: 3,
            image: vegan,
            title: title3,
            desc: desc3,
            para: para3,
            price: "250",
        }
    ];

    // Find the specific card data
    const card = CardData.find((item) => item.id === parseInt(id, 10));

    if (!card) {
        return <p>Details not found!</p>;
    }

    return (
        <div className="details-page">
            <h1>{card.title}</h1>
            <div className='detailsDiv'>
                <div className='detailsImg'>
                    <img src={card.image} alt={card.title} />
                </div>
                <div className='detailsDesc'>
                    <p>{card.para}</p>
                    <div className='detailsLast'>
                        <strong>{priceAmount} : {`\u20B9`}{card.price}</strong> <br />
                        <button>{orderNow}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerDetails;
