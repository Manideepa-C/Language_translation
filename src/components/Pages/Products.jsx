import React, { useEffect, useState } from 'react';
import "./About.css";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [translatedData, setTranslatedData] = useState([]);
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const author = t("author");
    const products = t("products", { ns: 'footer' });

    const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyCSQByqNgZ8UWwAUOkX5JmcbbLVoUyLyYw';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyapi.online/api/blogposts");
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const translateData = async () => {
            try {
                const currentLanguage = i18n.language;
                const textsToTranslate = data.flatMap((item) => [
                    item.title,
                    item.author,
                    item.content,
                ]);

                const translations = await Promise.all(
                    textsToTranslate.map(async (text) => {
                        const response = await axios.post(
                            `https://translation.googleapis.com/language/translate/v2`,
                            {},
                            {
                                params: {
                                    q: text,
                                    target: currentLanguage,
                                    key: GOOGLE_TRANSLATE_API_KEY,
                                },
                            }
                        );
                        return response.data.data.translations[0].translatedText;
                    })
                );

                const updatedData = data.map((item, index) => ({
                    ...item,
                    title: translations[index * 3],
                    author: translations[index * 3 + 1],
                    content: translations[index * 3 + 2],
                }));

                setTranslatedData(updatedData);
            } catch (error) {
                console.error('Translation Error:', error);
            }
        };

        if (data.length > 0) {
            translateData();
        }
    }, [data, i18n.language]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const displayedData = translatedData.length > 0 ? translatedData : data;

    return (
        <div className='productz'>
            <h1>{products}</h1>
            <div className='gridz'>
                {displayedData.slice(0, 6).map((item, index) => (
                    <div key={index} className='cardz'>
                        <p><b>{item.title}</b></p>
                        <p>{author}: {item.author}</p>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;




