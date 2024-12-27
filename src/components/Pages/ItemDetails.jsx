import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import pizzaImg from "../assets/pizza.jpg";
import tacosImg from "../assets/tacos.jpg";
import shawarmaImg from "../assets/shawarma.jpg";
import fcImg from "../assets/friedchicken.jpg";
import "./ItemDetails.css";

const ItemDetails = () => {
    const { name } = useParams();
    const { t } = useTranslation("comingSoon"); 

    const pizza = t("pizza.title");
    const desc1 = t("pizza.description");

    const taco = t("taco.title");
    const desc2 = t("taco.description");

    const shawarma = t("shawarma.title");
    const desc3 = t("shawarma.description");

    const friedChicken = t("friedChicken.title");
    const desc4 = t("friedChicken.description");

    const orderNow = t("translations.orderNow", {ns: "translation"});
    const priceAmount = t("price", {ns: "translation"});

    const Soondata = [
        { name: "pizza", title: pizza, image: pizzaImg, desc: desc1, price: "240" },
        { name: "taco", title: taco, image: tacosImg, desc: desc2, price: "150" },
        { name: "shawarma", title: shawarma, image: shawarmaImg, desc: desc3, price: "140" },
        { name: "friedChicken", title: friedChicken, image: fcImg, desc: desc4, price: "200" }
    ];

    const item = Soondata.find((item) => item.name === name);

    if (!item) {
        return <p>Details not found!</p>;
    }

    return (
        <div className="item-details">
            <h1>{item.title}</h1>
            <div className='detailsDiv'>
                <div className='detailsImg'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='detailsDesc'>
                    <p>{item.desc}</p>
                    <div className='detailsLast'>
                        <strong>{priceAmount} : {`\u20B9`}{item.price}</strong> 
                        <button>{orderNow}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;

