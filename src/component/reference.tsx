import { Element } from 'react-scroll';
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useRef, useState } from 'react';
import { reference } from '../utils/constant';
import Icon from './Icon';
import { AppContext } from '../app-context';
import { useTranslation } from 'react-i18next';

interface ReferenceProps{

}
  
const Reference:React.FC<ReferenceProps> = ()=>{
    const {t} = useTranslation()
    const nav = [
        { name: t("all") ,label:"all"},
        { name: t("website"),label:"website" },
        { name: t("ecommerce"),label:"ecommerce" },
        { name: t("mobileApp"),label:"app" },
        { name: t("saas"),label:"saas" }
    ];
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [cardsLayout,setCardsLayout] = useState<any[]>([])
    const containerRef = useRef<HTMLDivElement>(null);
    const {setContextData} = useContext(AppContext)
    const filteredItems =
    selectedCategory === "all"
      ? cardsLayout
      : cardsLayout.filter((item) => item.category === selectedCategory);
    const showRefContent = (card:any)=>{
      const windowWidth = window.innerWidth;
      const costomeWidth = windowWidth >= 600 ? 'w-[70%]' : windowWidth <= 600 && windowWidth >= 420 ? 'w-[85%]' : 'w-[100%]'
      setContextData({state:"show",value:true,size:costomeWidth,mode:'reference',id:card.refId,cat:card.category})
    }
    useEffect(()=>{
      const createCardObjet = ()=>{
        const gridData:any = []
        Object.values(reference).forEach((item)=>{
          item.referenceContent.forEach((val:any)=>{
            const item = {title:val.projet,link:val.img,mode:val.mode,shortText:val.shortText,category:val.cat,name:val.name,refId:val.refId,projet:val.projet}
            gridData.push(item)
          })
        })
        
        /*const newArray = [...gridData]; // Copie du tableau pour éviter de modifier l'original
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Index aléatoire entre 0 et i
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Échange des éléments
        }*/
        return gridData
      }
      const cardsLayout = createCardObjet();
      setCardsLayout(cardsLayout)
    },[])
    console.log("cardsLayout",cardsLayout)
    return (
        <Element className="mt-[110px]" name="reference">
            <div className='bg-secondary pb-8'>
                <h1 className='mb-5 mx-[calc(15%/2)] pt-[30px] uppercase text-fifty'>{t("ourReferences")}</h1>
                <p className='mx-[calc(15%/2)] text-fifty mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur.</p>
                <nav className='flex justify-center items-center gap-4 bg-white p-2 flex-wrap mx-auto w-[85%]'>
                    {
                        nav.map((item)=>{
                            return (
                              <div className={`cursor-pointer hover:underline hover:text-secondary ${selectedCategory === item.label ? 'text-secondary' : 'text-primary'}`} key={`${item.label}_key`} onClick={()=>setSelectedCategory(item.label)}>{item.name}</div> 
                            )
                        })
                    }
                </nav>
            </div>
            <div className='w-[85%] mx-auto'>
                <div ref={containerRef} className="flex justify-center items-start gap-4 relative mt-5 w-full flex-wrap">
                  <AnimatePresence>
                    {filteredItems.map((card:any,index:number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-[350px] group max-420:w-[280px] max-330:w-[250px]" onClick={()=>showRefContent(card)}>
                        <div className='h-[300px] relative overflow-hidden group'>
                          <img className='h-full object-cover cursor-pointer' src={card.link} alt={card.title} />
                          <div className='h-full cursor-pointer w-full bg-[rgba(142,22,22,.5)] absolute top-0 left-0 flex justify-center items-center transition-transform duration-500 ease-in-out translate-y-[350px] group-hover:translate-y-0'><Icon name='bx-show' size='4em' color='#fff'/></div>
                        </div>
                        <div className={`bg-fifty group-hover:bg-secondary py-2`}>
                            <div className='flex justify-between items-center gap-2 mx-4'>
                              <h4 className='text-secondary font-semibold text-[18px] mb-2 text-ellipsis whitespace-nowrap w-fit uppercase group-hover:text-fifty relative before:w-2/5 before:h-1 before:bg-secondary before:bottom-[-4px] before:left-[1px] before:block before:group-hover:bg-fifty before:absolute'>{card.projet}</h4>
                              <span className='text-[11px] text-[#aaa]'>{card.mode}</span>
                            </div>
                            <p className='uppercase text-[14px] font-medium mx-4 mt-1 text-primary group-hover:text-fifty'>{card.name}</p>
                            <p className='mx-4 mt-1 text-[13px] text-primary uppercase group-hover:text-fifty'>{card.shortText}</p>
                          </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
            </div>
        </Element>
    )
}

export default Reference