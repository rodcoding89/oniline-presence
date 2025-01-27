import { useContext, useEffect, useState } from "react"
import i18n from '../i18n';
import { Link } from 'react-scroll';
import { AppContext } from "../app-context";
import CloseButton from "./close-btn";
import { useTranslation } from 'react-i18next';
interface PopupProps{
    windowSize:string,
    mode:string
}

const PopUp:React.FC<PopupProps> = ({windowSize,mode})=>{
    const { t } = useTranslation();
    const [hidePopUp,setHidePopUp] = useState<boolean>(false);
    const {contextData,setContextData} = useContext(AppContext)
    const handlePopUp = ()=>{
        setContextData({type:"popupMain",value:false})
    }
    useEffect(()=>{
        if (contextData && contextData.type === "popupMain") {
            setHidePopUp(contextData.value)
        } 
    },[contextData])
    return (
        <div className={`fixed flex justify-end w-[100vw] h-[100vh] top-0 right-0 bottom-0 transition-all duration-500 ease-out ${hidePopUp ? 'z-[100] bg-[rgba(0,0,0,0.3)]':'z-[-1] bg-transparent'}`}>
            <div className={`relative ${windowSize} bg-fifty min-h-[1500px] overflow-y-auto transition-transform duration-700 ease-out ${hidePopUp ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
                {
                    mode === 'mobile' ? (
                        <div className="flex flex-col justify-between items-start h-[100vh] gap-3 py-3 px-5">
                            <div className="flex justify-between items-center gap-3 w-full">
                                <Link
                                className='cursor-pointer'
                                activeClass="active" 
                                spy={true} 
                                smooth={true} 
                                offset={-65} 
                                duration={500}
                                to={`home`}
                                >LOGO</Link>
                                <span className=" cursor-pointer"><CloseButton size="large" onClose={handlePopUp}/></span>
                            </div>
                            <div className="w-full">
                                <h4 className="uppercase text-[1.15em] mb-2 font-semibold">A propos<span className='w-1/6 block h-[2px] bg-thirty mb-2'></span></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, obcaecati at. Ipsum eum explicabo eaque!</p>
                            </div>
                            <div className="w-full">
                                <h4 className="uppercase text-[1.15em] mb-2 font-semibold">Navigation<span className='w-1/6 block h-[2px] bg-thirty mb-2'></span></h4>
                                <nav className='navi flex justify-start items-start gap-3 flex-col'>
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
                            </div>
                            <div className="w-full">
                                <h4 className="uppercase text-[1.15em] mb-2 font-semibold">Contact<span className='w-1/6 block h-[2px] bg-thirty mb-2'></span></h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    ):(
                        <div>
                            <h1 className="text-primary">Reférence</h1>
                            <span className="absolute right-3 top-3 cursor-pointer"><CloseButton size="large" onClose={handlePopUp}/></span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PopUp