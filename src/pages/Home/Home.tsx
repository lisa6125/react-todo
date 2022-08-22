import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//styled
import { StyledHome } from './StyledHome'

//i18n
import { useTranslation } from 'react-i18next';


import { RiGlobalLine } from "react-icons/ri";

export default function Home() {
    const { t, i18n } = useTranslation();

    const [openLang, setOpenLang] = useState<boolean>(false);

    const toggleOpenLang = () => {
        setOpenLang((openLang) => !openLang);
    }

    const changeLange = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    return (
        <StyledHome>
            <div className='Home'>
                <div className="Home_pic">
                    <img src="../assets/images/board-man.png" alt="" />
                </div>
                <div className="Home_text">{t('chose_where_you_want')}</div>
                <div className="Home_chose">
                    <div className="Home_chose_item">
                        {t('sign_in')}
                    </div>
                    <div className="Home_chose_item">
                        {t('register_account')}
                    </div>
                    <Link to='/Todo' className="Home_chose_item">
                        {t('write_to-do_list')}
                    </Link>
                </div>
                <div className="Home_Language">
                    <div className="Home_Language_text" onClick={toggleOpenLang}>
                        <RiGlobalLine />
                        <span>{i18n.language === "zh-TW" ? t('Chinese') : t('English')}</span>
                    </div>
                    {openLang && <div className="Home_Language_choice">
                        <span onClick={() => changeLange('zh-tw')}>{t('Chinese')}</span>
                        <span onClick={() => changeLange('en')}>{t('English')}</span>
                    </div>}
                </div>
            </div>
        </StyledHome>
    )
}
