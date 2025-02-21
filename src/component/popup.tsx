import { useContext, useEffect, useState } from "react"
import i18n from '../i18n';
import { Link } from 'react-scroll';
import { AppContext } from "../app-context";
import CloseButton from "./close-btn";
import { useTranslation } from 'react-i18next';
import { refDetailContent, reference, serviceDetail } from "../utils/constant";
import Icon from "./Icon";
import { div } from "motion/react-client";
interface PopupProps{
    windowSize:string,
    mode:string,
    id:number|null
}

const PopUp:React.FC<PopupProps> = ({windowSize,mode,id})=>{
    const { t } = useTranslation();
    const [hidePopUp,setHidePopUp] = useState<boolean>(false);
    const [refDetail,setRefDetail] = useState<any>()
    const [serviceSiteReference,setServiceSiteReference] = useState<any>()
    const {contextData,setContextData} = useContext(AppContext)
    const data:any = id !== null ? serviceDetail[id as keyof typeof serviceDetail] : null;
    //const refenrence = id !== null && mode === 'service' ? reference[id] : null
    //= id !== null ? refDetailContent[id] : null
    const [popupMode,setMode] = useState<string>('')
    
    const [currentIndex,setCurrentIndex] = useState<number>(0)
    const handlePopUp = ()=>{
        setContextData({state:"hide",value:false,size:windowSize})
        setHidePopUp(false)
    }
    const openRefDetail = (refId:number,cat:string)=>{ 
        console.log("refDetail",refId,cat)
        setRefDetail(refDetailContent[cat][refId])
        setMode('reference')
    }
    const slide = (param:string)=>{
        console.log('is called',param)
        if (param === 'prev') {
            setCurrentIndex((prev)=>prev > 0 ? prev - 1 : 0)
        }else{
            setCurrentIndex((prev)=> prev === serviceSiteReference?.referenceContent.length! - 1 ? prev : prev + 1)
        }
    }
    useEffect(()=>{
        if (contextData && contextData.state === "show") {
            console.log("contextData.value",contextData.value)
            setHidePopUp(contextData.value)
        }
    },[contextData])
    useEffect(()=>{
        if (mode === "service" && id) {
            setServiceSiteReference(reference[id])
        }else if(mode === "reference" && id){
            //console.log("cat",cat,id)
            setRefDetail(refDetailContent[contextData.cat][contextData.id])
        }
        setMode(mode)
    },[mode])
    console.log("mode",hidePopUp,contextData)
    return (
        <div className={`fixed flex justify-end w-[100vw] h-[100vh] top-0 right-0 bottom-0 transition-all duration-500 ease-in-out ${hidePopUp ? 'z-[100] bg-[rgba(0,0,0,0.3)]':'z-[-1] bg-transparent'}`}>
            <div className={`relative ${windowSize} bg-fifty overflow-y-auto transition-transform duration-700 ease-in-out ${hidePopUp ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
                {
                    popupMode === 'mobile' ? (
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
                                <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className='flex justify-start items-center gap-2'>
                                    <a className='flex justify-center items-center gap-1 w-[40px] h-[40px] rounded-[.2em] bg-white'  href='tel:+33751025598'><Icon name='bx-phone' size='1.4em' color='var(--color-secondary)'/></a>
                                    <a className='flex justify-center items-center gap-1 w-[40px] h-[40px] rounded-[.2em] bg-white'  href='mailto:rodriguekwayep.freelance@hotmail.com'><Icon name='bx-envelope' size='1.4em' color='var(--color-secondary)'/></a>
                                </div>
                            </div>
                        </div>
                    ): popupMode === 'service' ? (
                        <div className="flex flex-col justify-between items-start h-[100vh] gap-3 py-3 px-8 overflow-y-auto ">
                            <div className="flex justify-between items-center gap-3 w-full">
                                <h3 className="text-[1.5em] font-bold uppercase text-thirty">Services</h3>
                                <span className=" cursor-pointer"><CloseButton size="large" onClose={handlePopUp}/></span>
                            </div>
                            <div className="mt-3">
                                <h2 className="text-[1.8em] text-thirty font-semibold mb-3">{data?.title}</h2>
                                <p className="mb-3">{data?.info}</p>
                                <div className="flex flex-col justify-start items-center gap-5">
                                    {
                                        data?.content.map((item:any,index:number)=>{
                                            
                                            return <div key={index} className={`${item.contentPara === undefined ? 'flex justify-start items-center max-810:flex-col gap-5 flex-row-reverse' : ''}`}>
                                                <div className="mt-3 mb-5 w-full block">
                                                    <h4 className="font-semibold mb-1">{item.title}</h4>
                                                    <p className="whitespace-pre-wrap mb-2">{item.para}</p>
                                                    <p className="whitespace-pre-wrap font-bold text-blue-950">{item.souspara}</p>
                                                </div>
                                                {
                                                    item.contentPara === undefined ? <img className="w-1/2 aspect-[4/2] max-810:w-full" src={item.img} alt={item.title} /> : (
                                                        <div className={`w-full flex items-center gap-5 max-810:flex-col ${index%2 === 0 ? '':'flex-row-reverse'}`}>
                                                        <img className="w-1/2 max-810:w-full aspect-[4/2]" src={item.img} alt={item.title} />
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
                                <div className="mt-10 mb-3">
                                    <h2 className="mb-3 text-[2em] text-thirty font-semibold">Nos réalisation</h2>
                                    <h4 className="mb-3 text-[1.5em] text-primary font-semibold">{serviceSiteReference?.title}</h4>
                                    <div className="flex justify-between items-start gap-3 max-810:flex-col-reverse">
                                        <div className="overflow-hidden w-4/5 max-810:w-full">
                                            <div className={`flex justify-start transition-transform duration-700 ease-in-out items-center`} style={{width:`${serviceSiteReference?.referenceContent.length!*100}%`,transform: `translateX(-${currentIndex*100/serviceSiteReference?.referenceContent.length!}%)`}}>
                                                {
                                                    serviceSiteReference?.referenceContent.map((item:any,index:number)=>{
                                                    return (
                                                        <div key={index} className={` aspect-video relative w-full`} style={{width:`${100 / serviceSiteReference?.referenceContent.length!}%`}}>
                                                            <img className="w-full" src={item.img} alt={item.projet} />
                                                            <div className="absolute bottom-0 left-0 bg-white text-secondary p-2 flex flex-col gap-1 text-[1.1em]">{item.projet}
                                                                <span className="underline cursor-pointer" onClick={()=>openRefDetail(item.refId,item.cat)}>détail</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center gap-5 w-1/5">
                                            <span onClick={()=>slide('prev')} className={`cursor-pointer w-10 h-10 rounded-[.2em] flex justify-center items-center bg-white ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed':''}`}><Icon name="bx-chevron-left" size="2em" color="var(--color-thirty)"/></span>
                                            <span onClick={()=>slide('naxt')} className={`cursor-pointer w-10 h-10 rounded-[.2em] flex justify-center items-center bg-white ${currentIndex === serviceSiteReference?.referenceContent.length! - 1 ? 'opacity-40 cursor-not-allowed':''}`}><Icon name="bx-chevron-right" size="2em" color="var(--color-thirty)"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-start items-start h-[100vh] gap-3 py-3 px-8 overflow-y-auto">
                            <div className="flex justify-between items-center gap-3 w-full">
                                <h3 className="text-[1.5em] font-bold uppercase text-thirty">Références</h3>
                                <span className=" cursor-pointer"><CloseButton size="large" onClose={handlePopUp}/></span>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-[1.7em] font-semibold text-right uppercase mb-3 ml-[50%] max-810:ml-[35%] max-420:ml-0 max-792:ml-[10%]">{refDetail?.title+' '+refDetail?.proprio}</h3>
                                <hr  className="border-thirty mb-10 ml-[50%]"/>
                                <div className="flex justify-center items-center gap-4 max-810:flex-col max-810:gap-y-5">
                                    <img className="w-1/2 aspect-[4/2] max-810:w-full" src={refDetail?.img} alt={refDetail?.proprio} />
                                    <div className="w-1/2 max-810:w-full">
                                        <h4 className="text-[1.4em] font-semibold text-thirty uppercase">{refDetail?.infoSite.title}</h4>
                                        <div className="flex flex-col justify-start items-start gap-2 mt-4">
                                            <div className="flex justify-between items-center gap-1 w-full flex-wrap">
                                                <span className="flex justify-start items-center gap-1">
                                                    <Icon name="bx-calendar" size="1em" color="var(--color-thirty)"/>
                                                    Année
                                                </span> 
                                                <span className="font-medium flex-1 text-right">{refDetail?.infoSite.year}</span>
                                            </div>
                                            <div className="flex justify-between items-center gap-1 w-full flex-wrap">
                                                <span className="flex justify-start items-center gap-1">
                                                    <Icon name="bx-category" size="1em" color="var(--color-thirty)"/>
                                                    Catégorie</span>
                                                <span className="font-medium flex-1 text-right">{refDetail?.infoSite.cat}</span>
                                            </div>
                                            <div className="flex justify-between items-center gap-2 w-full flex-wrap">
                                                <span className="flex justify-start items-center gap-1">
                                                    <Icon name="bx-code-alt" size="1.1em" color="var(--color-thirty)"/>Technologies
                                                </span>
                                                <div className="mt-4 flex justify-end items-center flex-wrap gap-2">
                                                {
                                                    refDetail?.infoSite.techno.map((item:string,index:number)=>{
                                                        return <p className="py-1 px-2 rounded-[.2em] text-fifty bg-thirty" key={index}>{item}</p>
                                                    })
                                                }
                                            </div>
                                            </div>
                                            {
                                                refDetail?.infoSite.link !== '' ? <div className="mt-4 flex justify-end items-end w-full"><a href={refDetail?.infoSite.link} className="py-1 px-4 outline outline-1 outline-thirty rounded-lg" target="__blanc">Lien du site </a></div> : <div className="mt-4 w-full flex justify-end items-end"><span className="py-1 px-4 outline outline-1 outline-thirty rounded-lg">Site en maintenance</span></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h4 className="text-[1.4em] font-semibold text-thirty uppercase mb-3">{refDetail?.description.title + ' '+refDetail?.proprio}</h4>
                                    <hr  className="border-thirty mb-5"/>
                                    <div className="mt-4">
                                        {
                                            refDetail?.description.para.map((item:any, index:number) => {
                                                const modifiedItem = item
                                                  .replace(/{name}/g, refDetail?.proprio)
                                                  .replace(/{open}/g, '<strong>')
                                                  .replace(/{close}/g, '</strong>');
                                        
                                                return (
                                                  <p className="whitespace-pre-wrap mb-3" key={index} dangerouslySetInnerHTML={{ __html: modifiedItem }}></p>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <h4 className="text-[1.4em] font-semibold text-thirty mb-3 uppercase">Tâches réalisés sur le site</h4>
                                    <hr  className="border-thirty mb-5"/>
                                    <ul className="flex justify-start items-center !list-decimal gap-2 flex-wrap w-full pl-5 max-792:flex-col">
                                        {
                                            refDetail?.task.map((item:string,index:number)=>{
                                                return <li className="w-[calc(50%-4px)] max-792:w-[calc(100%-4px)]" key={index}>
                                                <div className="flex justify-start items-center gap-1">
                                                  <Icon name="bx-check" size=".9em" />
                                                  {item}
                                                </div>
                                              </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PopUp