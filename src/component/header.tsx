import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import i18n from '../i18n';
import Icon from './Icon';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';


interface HeaderProps{

}

const Header:React.FC<HeaderProps> = ()=>{
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [language, setLanguage] = useState('');
    const [isShowLang, setIsShowLang] = useState(false);
    useEffect(() => {
        // Détecter la langue du navigateur
        const location = new URL(window.location.href);
    
        if (!["/en","/fr","/de"].includes(location.pathname)) {
            const detectedLanguage = navigator.language
            const langCode = detectedLanguage.split('-')[0] || 'en'; // Extrait le code de langue (ex: 'en' de 'en-US')
            // Définir la langue détectée comme valeur par défaut
            setLanguage(langCode);
        
            // Changer la langue dans i18next
            i18n.changeLanguage(langCode);
            navigate("/"+langCode)
        }else{
            setLanguage(location.pathname.split("/")[1]);
        
            // Changer la langue dans i18next
            i18n.changeLanguage(location.pathname.split("/")[1]);
        }
      }, [navigate]);
    const handleChangeLanguage = (lang: string) => {
        const newLang = lang;
        //setLanguage(newLang);

        if (i18n && i18n.changeLanguage) {
            i18n.changeLanguage(newLang, (err) => {
                if (err) {
                    console.error('Error changing language:', err);
                }
                setLanguage(newLang)
                navigate("/"+newLang)
                setIsShowLang(false)
            });
        } else {
            console.error('i18n is undefined or does not have the method changeLanguage');
        }
    };
    return (
        <header className='header w-full h-[65px] fixed top-0 left-0 bottom-0 right-0 z-10 flex items-center'>
            <div className='mx-auto flex justify-between items-center w-[85%]'>
                <Link
                className='cursor-pointer'
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-65} 
                duration={500}
                to={`home`}
                >LOGO</Link>
                <nav className='navi flex justify-start items-center gap-4'>
                    <Link
                    className='cursor-pointer text-primary'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500}
                    to={`home`}>{t("home")}</Link>
                    <Link 
                    className='cursor-pointer text-primary'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`about`}>A propos</Link>
                    <Link
                    className='cursor-pointer text-primary'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`services`}>Services</Link>
                    <Link
                    className='cursor-pointer text-primary'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`reference`}>Reférence</Link>
                    <Link
                    className='cursor-pointer text-primary'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`price`}>Tarif</Link>
                    <Link
                    className='cursor-pointer text-primary'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`contact`}>Contact</Link>
                </nav>
                <div className='relative flex justify-start items-center gap-3'>
                    <span className='flex justify-start items-center gap-1'><Icon name='bx-phone' size='1.4em' color='var(--color-secondary)'/><a className='text-secondary'  href='tel:+33751025598'>+33751025598</a></span>
                    <span className='cursor-pointer px-3 py-3 text-fifty hover:text-fifty flex items-center bg-secondary'><Link
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`contact`} 
                    >{t("devi")}</Link></span>
                    <button onClick={()=>setIsShowLang(!isShowLang)} className="language-picker__button btn focus:outline-none hover:border-0" aria-label="english Select your language" aria-expanded="false" aria-controls="language-picker-select-dropdown"><span aria-hidden="true" className="language-picker__label language-picker__flag language-picker__flag--english"><svg viewBox="0 0 16 16" className="icon"><path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M13.9,7H12c-0.1-1.5-0.4-2.9-0.8-4.1 C12.6,3.8,13.6,5.3,13.9,7z M8,14c-0.6,0-1.8-1.9-2-5H10C9.8,12.1,8.6,14,8,14z M6,7c0.2-3.1,1.3-5,2-5s1.8,1.9,2,5H6z M4.9,2.9 C4.4,4.1,4.1,5.5,4,7H2.1C2.4,5.3,3.4,3.8,4.9,2.9z M2.1,9H4c0.1,1.5,0.4,2.9,0.8,4.1C3.4,12.2,2.4,10.7,2.1,9z M11.1,13.1 c0.5-1.2,0.7-2.6,0.8-4.1h1.9C13.6,10.7,12.6,12.2,11.1,13.1z"></path></svg><em className='not-italic'>{language === 'fr' ? 'Français' : language === 'de' ? 'Deutsch' : 'English'}</em><svg viewBox="0 0 16 16" className="icon"><polygon points="3,5 8,11 13,5 "></polygon></svg></span></button>
                    <div className={`languages absolute top-[35px] right-0 w-[120px] my-2 bg-white overflow-hidden ${isShowLang ? 'opacity-1' : 'opacity-0'}`}>
                        <ul className={`${isShowLang ? 'h-[95px]' : 'h-0'}`}>
                            <li onClick={()=>handleChangeLanguage("de")} className={`py-1 cursor-pointer ${language === 'de' ? 'bg-blue-500 flex justify-between items-center text-white' : 'hover:bg-[#aaa]'}`}><span className='px-2'>Deutsch</span> {language === 'de' && <Icon name="bx-check mr-2" size='1.2' color='#fff'/>}</li>
                            <li onClick={()=>handleChangeLanguage("en")} className={`py-1 cursor-pointer ${language === 'en' ? 'bg-blue-500 flex justify-between items-center text-white' : 'hover:bg-[#aaa]'}`}><span className='px-2'>English</span> {language === 'en' && <Icon name="bx-check mr-2" size='1.2' color='#fff'/>}</li>
                            <li onClick={()=>handleChangeLanguage("fr")} className={`py-1 cursor-pointer ${language === 'fr' ? 'bg-blue-500 flex justify-between items-center text-white' : 'hover:bg-[#aaa]'}`}><span className='px-2'>Français</span> {language === 'fr' && <Icon name="bx-check mr-2" size='1.2' color='#fff'/>}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header