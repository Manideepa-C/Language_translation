import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsGlobe } from "react-icons/bs";
import "./Header.css";

const languages = [
    { code: 'en', lang: 'English' },
    { code: 'hi', lang: 'Hindi (हिंदी)' },
    { code: 'fr', lang: 'French (Français)' },
    { code: 'es', lang: 'Spanish (Español)' },
    { code: 'zh', lang: 'Chinese (中文)' },
    { code: 'de', lang: 'German (Deutsch)' },
    { code: 'la', lang: 'Latin (Latina)' },
];


const LanguageSelector = () => {

    const { i18n } = useTranslation();

    const handleChange = (event) => {
        const currentLanguage = event.target.value;
        i18n.changeLanguage(currentLanguage);
    };

    return (
        <div className='lng_selct'>
            <label htmlFor="language-select"><BsGlobe className='icon' /></label>
            <select id="language-select"
                onChange={handleChange}
                defaultValue={i18n.language}
                className="custom-select"
            >
                {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                        {lng.lang}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelector