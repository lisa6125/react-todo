import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//styled
import { StyledHome } from './StyledHome'

//i18n
import { useTranslation } from 'react-i18next'

import { RiGlobalLine } from "react-icons/ri"

// redux
import { useSelector } from 'react-redux'
// dispatch type
import { RootStore } from '../../redux/store'

// img
import boardMan from '../../assets/images/board-man.png'

export default function Home() {
    const { t, i18n } = useTranslation();

    const store = useSelector((store: RootStore) => store)

    const [openLang, setOpenLang] = useState<boolean>(false);
    const [Lang, setLang] = useState<string>(i18n.language);


    const toggleOpenLang = () => {
        setOpenLang((openLang) => !openLang);
    }

    const changeLange = (lang: string) => {
        i18n.changeLanguage(lang);
        setLang(lang);
        setOpenLang((openLang) => !openLang);
    }
    return (
        <StyledHome>
            <div className='Home'>
                <div className="Home_pic">
                    <img src={boardMan} alt="" />
                </div>
                <div className="Home_text">{t('chose_where_you_want')}</div>
                <div className="Home_chose">
                    {
                        store.userStatus.user == '' ?
                            <>
                                <Link to='/SignIn' className="Home_chose_item">
                                    {t('sign_in')}
                                </Link>
                                <Link to='/Register' className="Home_chose_item">
                                    {t('register_account')}
                                </Link>
                            </>
                            :
                            <Link to='/Todo' className="Home_chose_item">
                                {t('write_to-do_list')}
                            </Link>
                    }
                </div>
                <div className="Home_Language">
                    <div className="Home_Language_text" onClick={toggleOpenLang}>
                        <RiGlobalLine />
                        <span>{Lang === "zh-tw" ? t('Chinese') : Lang === "zh-TW" ? t('Chinese') : t('English')}</span>
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
