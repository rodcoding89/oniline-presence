import { Element } from 'react-scroll';
import IsoTopeGrid from "react-isotope";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { reference } from '../utils/constant';

interface ReferenceProps{

}
  
const Reference:React.FC<ReferenceProps> = ()=>{
    const nav = [
        { name: "Tous" ,label:"all"},
        { name: "Site internet",label:"website" },
        { name: "Site E-commerce",label:"ecommerce" },
        { name: "Application mobile",label:"app" },
        { name: "Logiciel metiès / Saas",label:"saas" }
    ];
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [cardsLayout,setCardsLayout] = useState<any[]>([])
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredItems =
    selectedCategory === "all"
      ? cardsLayout
      : cardsLayout.filter((item) => item.category === selectedCategory);

    useEffect(()=>{
      const createCardObjet = ()=>{
        const gridData:any = []
        Object.values(reference).forEach((item)=>{
          item.referenceContent.forEach((val:any)=>{
            const item = {title:val.projet,link:val.img,mode:val.mode,shortText:val.shortText,category:val.cat}
            gridData.push(item)
          })
        })
        return gridData;
      }
      const cardsLayout = createCardObjet();
      setCardsLayout(cardsLayout)
    },[])
    console.log("cardsLayout",cardsLayout)
    return (
        <Element className="mt-[75px]" name="reference">
            <div className='bg-secondary h-[400px]'>
                <h1 className='mb-10 mx-[calc(15%/2)] pt-[20px] uppercase text-fifty'>Nos références</h1>
                <p className='mx-[calc(15%/2)] text-fifty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur.</p>
            </div>
            <div className='w-[85%] mx-auto mt-[-160px] min-h-[160px]'>
                <nav className='flex justify-center items-center gap-4 bg-fifty p-2 flex-wrap'>
                    {
                        nav.map((item,index)=>{
                            return (
                              <div className={`cursor-pointer hover:underline hover:text-secondary ${selectedCategory === item.label ? 'text-secondary' : 'text-primary'}`} key={`${item.label}_key`} onClick={()=>setSelectedCategory(item.label)}>{item.name}</div> 
                            )
                        })
                    }
                </nav>
                <div ref={containerRef} className="flex justify-center items-start gap-4 relative mt-5 w-full flex-wrap">
                  <AnimatePresence>
                    {filteredItems.map((card:any,index:number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-[300px] relative overflow-hidden group"
                      >
                        <img src={card.link} alt={card.title} />
                        <div className={`bg-[#060641] p-2 absolute bottom-0 left-0 translate-y-[150px] transition-transform duration-700 ease-in-out group-hover:translate-y-0 w-full siteInfo overflow-hidden cursor-pointer`}>
                            <div className='flex justify-between items-center gap-2'>
                              <h4 className='text-fifty font-semibold text-[18px] mb-2 text-ellipsis overflow-hidden whitespace-nowrap flex-1'>{card.title}</h4>
                              <span className='text-[11px] text-[#aaa]'>{card.mode}</span>
                              
                            </div>
                            <p className='hidden p-[10px] text-[14px] bg-fifty text-[#060641] translate-y-[0px]'>{card.shortText}</p>
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