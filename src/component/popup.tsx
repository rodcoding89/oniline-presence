import { useContext, useEffect, useState } from "react"
import i18n from '../i18n';
import { Link } from 'react-scroll';
import { AppContext } from "../app-context";
import CloseButton from "./close-btn";
import { useTranslation } from 'react-i18next';
import { reference, serviceDetail } from "../utils/constant";
interface PopupProps{
    windowSize:string,
    mode:string,
    id:number|null
}

const PopUp:React.FC<PopupProps> = ({windowSize,mode,id})=>{
    const { t } = useTranslation();
    const [hidePopUp,setHidePopUp] = useState<boolean>(false);
    const {contextData,setContextData} = useContext(AppContext)
    const data:any = id !== null ? serviceDetail[id as keyof typeof serviceDetail] : null;
    const refenrence = id !== null ? reference[id] : null
    console.log("data",data)
    const [currentIndex,setCurrentIndex] = useState<number>(0)
    const handlePopUp = ()=>{
        setContextData({type:"popupMain",value:false})
    }
    const slide = (param:string)=>{
        console.log('is called',param)
        if (param === 'prev') {
            setCurrentIndex((prev)=>prev > 0 ? prev - 1 : 0)
        }else{
            setCurrentIndex((prev)=> prev === refenrence?.referenceContent.length! - 1 ? prev : prev + 1)
        }
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
                    ): mode === 'service' ? (
                        <div className="flex flex-col justify-between items-start h-[100vh] gap-3 py-3 px-8 overflow-y-auto">
                            <div className="flex justify-between items-center gap-3 w-full">
                                <h3 className="text-[1.5em] font-bold uppercase text-thirty">Services</h3>
                                <span className=" cursor-pointer"><CloseButton size="large" onClose={handlePopUp}/></span>
                            </div>
                            <div className="mt-3">
                                <h2 className="text-[1.8em] text-thirty font-semibold mb-3">{data.title}</h2>
                                <p className="mb-3">{data.info}</p>
                                <div className="flex flex-col justify-start items-center gap-5">
                                    {
                                        data.content.map((item:any,index:number)=>{
                                            
                                            return <div key={index} className={`${item.contentPara === undefined ? 'flex justify-start items-center gap-5 flex-row-reverse' : ''}`}>
                                                <div className="mt-3 mb-5 w-full block">
                                                    <h4 className="font-semibold mb-1">{item.title}</h4>
                                                    <p className="whitespace-pre-wrap mb-2">{item.para}</p>
                                                    <p className="whitespace-pre-wrap font-bold text-blue-950">{item.souspara}</p>
                                                </div>
                                                {
                                                    item.contentPara === undefined ? <img className="w-1/2" src={item.img} alt={item.title} /> : (
                                                        <div className={`w-full flex items-center gap-5 ${index%2 === 0 ? '':'flex-row-reverse'}`}>
                                                        <img className="w-1/2 aspect-square" src={item.img} alt={item.title} />
                                                        <div className="flex-1">
                                                        {item.contentPara.map((para:any, j:number) => (
                                                                <div className="" key={`${index}_${j}`}>
                                                                <h5 className=" text-thirty mb-2 font-semibold text-[1.3em]">{para.title}</h5>
                                                                <p className="whitespace-pre-wrap mb-3">{para.text}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    )
                                                }

                                            </div>
                                        })
                                    }
                                </div>
                                <div className="mt-5 text-[1.8em] text-thirty font-semibold mb-3">
                                    <h2>Nos réalisation</h2>
                                    <h4>{refenrence?.title}</h4>
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="overflow-hidden w-4/5">
                                            <div className={`flex justify-start transition-transform duration-700 ease-in-out items-center`} style={{width:`${refenrence?.referenceContent.length!*100}%`,transform: `translateX(-${currentIndex*100/refenrence?.referenceContent.length!}%)`}}>
                                                {
                                                    refenrence?.referenceContent.map((item:any,index:number)=>{
                                                    return (
                                                        <div key={index} className="w-full aspect-video">
                                                            <img src={item.img} alt={item.projet} />
                                                            <div>{item.projet}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center gap-2 w-1/5">
                                            <span onClick={()=>slide('prev')} className="cursor-pointer">Prev</span>
                                            <span onClick={()=>slide('naxt')} className="cursor-pointer">Next</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
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