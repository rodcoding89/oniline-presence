import { useState } from 'react';
import {Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import { priceList } from '../utils/constant';

interface PriceProps{

}

const Price:React.FC<PriceProps> = ()=>{
    const { t } = useTranslation();
    const initialActiveContentIndex = priceList.reduce((acc, _, index) => {
        acc[index] = 0; // Par défaut, sélectionner "Wordpress" (content[0])
        return acc;
      }, {} as { [key: number]: number });
    const [activeContentIndex, setActiveContentIndex] = useState<{ [key: number]: number }>(
        initialActiveContentIndex
    );
    const handleContentSwitch = (itemIndex: number, contentIndex: number) => {
        setActiveContentIndex((prev) => ({
          ...prev,
          [itemIndex]: contentIndex, // Met à jour l'index du contenu pour cet élément
        }));
    };
    return (
        <Element className="mt-[110px]" name="price">
            <div>
                <div className='w-[85%] mx-auto'>
                    <h1 className='text-center text-thirty font-semibold mb-4 uppercase'>{t("price")}</h1>
                    <h4 className='text-center text-[#aaa] text-[1.4em] mb-10'>{t("priceTitle")}</h4>
                    <div className='flex flex-wrap gap-5 justify-center w-full'>
                        {
                            priceList.map((item,index)=>{
                                return (
                                    <div key={index} className='self-stretch py-4 bg-[#211f1f] basis-[200px] flex-grow max-w-[250px]'>
                                        <h3 className='text-center uppercase font-bold text-[1em] flex flex-col justify-center text-fifty items-center mx-4'>{t(item.title)}<span className='w-1/5 h-[6px] bg-thirty mb-5 mt-3'></span></h3>
                                        {
                                            item.devMethode && (
                                                <div className='flex justify-center w-full px-4'>
                                                    <div className='flex justify-around items-center gap-3 py-2 px-3 bg-white'>
                                                    {
                                                        item.devMethode.map((m,i)=>{
                                                            return(
                                                                <p onClick={()=>handleContentSwitch(index, i)} className={` relative cursor-pointer uppercase text-[.67em] text-ellipsis whitespace-nowrap overflow-hidden before:w-0 
                                                                before:transition-all before:duration-700 before:ease-in-out z-0 ${activeContentIndex[index] === i ? ' py-1 px-2 before:absolute before:left-0 before:top-0 before:bg-thirty before:!w-full before:h-full before:rounded-xl before:z-[-1] font-semibold text-fifty':''}`} key={i}>{t(m)}</p>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <h6 className='text-center text-[#aaa] uppercase mt-4 mb-[-4px] mx-4'>{t("from")}</h6>
                                        <div className='text-center w-full flex flex-col justify-center items-center px-4'>
                                            <span className='text-center text-[3em] relative text-fifty'>{item.content[activeContentIndex[index] || 0].price}<em className='absolute top-[3px] right-[-8px] !text-[.4em] text-fifty'>€</em></span>
                                            <span className='w-1/5 block h-[6px] bg-thirty mb-5 mt-2'></span>
                                        </div>
                                        <p className='block text-center font-medium text-fifty'>{t(item.content[activeContentIndex[index] || 0].devType.type)}</p>
                                        <span className='block text-center text-[.8em] mb-3 text-fifty'>{t(item.content[activeContentIndex[index] || 0].devType.outil)}</span>
                                        <ul className='m-0 p-0 flex flex-col justify-start items-start gap-2 w-full'>
                                            {
                                                item.content[activeContentIndex[index] || 0].options.map((o,k)=>{
                                                    return (
                                                        <li key={k} className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 ${k%2 === 0 ? 'bg-primary text-fifty' : 'text-fifty'}`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{o}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <span className='cursor-pointer px-6 mt-3 py-3 text-fifty bg-thirty hover:text-thirty hover:bg-white flex items-center justify-center transition-hover duration-500 ease-in mx-4'>
                                        <Link
                                        activeClass="active"
                                        className='text-center'
                                        spy={true} 
                                        smooth={true} 
                                        offset={-65} 
                                        duration={500} 
                                        to={`contact`} 
                                        >{t("devi")}
                                        </Link>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-wrap justify-center gap-5 mt-10'>
                        <div className='basis-[200px] max-w-[250px] flex-grow py-4 bg-[#211f1f] flex-wrap'>
                            <h3 className='text-center uppercase font-bold text-[1.3em] flex flex-col justify-center items-center text-fifty mx-4'>{t("maintice")}<span className='w-1/5 h-[6px] bg-thirty mb-5 mt-3'></span></h3>
                            <div className='text-center w-full flex flex-col justify-center items-center px-4'>
                                <p className='font-semibold text-[1.7em] text-fifty'>50<em className='font-light text-[.5em] mt-[-1px] text-fifty'>€/{t("hourOr")}</em></p>
                                <span className='text-center text-[3em] relative text-fifty'>500<em className='absolute top-[3px] right-[-41px] !text-[.4em] text-fifty'>€/{t("year")}</em></span>
                                <span className='w-1/5 block h-[6px] bg-thirty mb-5 mt-2'></span>
                            </div>
                            <ul className='m-0 p-0 flex flex-col justify-start items-start gap-2 w-full'>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 bg-primary text-fifty`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{t("update")}</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 text-fifty`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{t("graphChanging")}</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 bg-primary text-fifty`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{t("saving")}</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 text-fifty`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{t("performanceOptimisation")}</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 bg-primary text-fifty`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{t("restauring")}</li>
                            </ul>
                            <span className='cursor-pointer px-6 mt-3 py-3 text-fifty bg-thirty hover:text-thirty hover:bg-white flex items-center justify-center transition-hover duration-500 ease-in mx-4'>
                                <Link
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                offset={-65} 
                                duration={500} 
                                to={`contact`} 
                                >{t("contactMe")}
                                </Link>
                            </span>
                        </div>
                        <div className='basis-[200px] max-w-[250px] flex-grow py-4 bg-[#211f1f] self-start'>
                            <h3 className='text-center uppercase font-bold text-[1.3em] flex flex-col justify-center items-center text-fifty mx-4'>{t("specificDev")}<span className='w-1/5 h-[6px] bg-thirty mb-5 mt-3'></span></h3>
                            <h6 className='text-center text-[#aaa] uppercase mt-4 mb-[-4px] mx-4'>{t("dayPrice")}</h6>
                            <div className='text-center px-4'>
                                <span className='text-center text-[3em] relative text-fifty'>400<em className='absolute top-[3px] right-[-62px] !text-[.4em] text-fifty'>€/{t("day")}</em></span>
                            </div>
                            <span className='cursor-pointer px-6 mt-3 py-3 text-fifty bg-thirty hover:text-thirty hover:bg-white flex items-center justify-center transition-hover duration-500 ease-in mx-4'>
                                <Link
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                offset={-65} 
                                duration={500} 
                                to={`contact`} 
                                >{t("contactMe")}
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Price