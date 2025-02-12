import { Element } from 'react-scroll';
import IsoTopeGrid from "react-isotope";
import { useEffect, useRef, useState } from 'react';
import { reference } from '../utils/constant';

interface ReferenceProps{

}

function createCardObjet(){
  const gridData:any = []
  Object.values(reference).forEach((item)=>{
    item.referenceContent.forEach((val:any)=>{
      const item = {"id":'label'+(val.index).toString(),"content":{title:val.projet,link:val.img,mode:val.mode,shortText:val.shortText},"row":0,"col":0,"w":1,"h":1,"filter":[val.cat]}
      gridData.push(item)
    })
  })
  return gridData;
}
  
const Reference:React.FC<ReferenceProps> = ()=>{
    const nav = [
        { name: "Tous", isChecked: true ,label:"all"},
        { name: "Site internet", isChecked: false,label:"website" },
        { name: "Site E-commerce", isChecked: false,label:"ecommerce" },
        { name: "Application mobile", isChecked: false,label:"app" },
        { name: "Logiciel metiès / Saas", isChecked: false,label:"saas" }
    ];
    const [noOfCols, setNoOfCols] = useState(Math.floor((window.innerWidth *.85 - 16)/ 250));
    const [filters, updateFilters] = useState<{name:string,isChecked:boolean,label:string}[]>(nav);
    const cardsLayout = createCardObjet();
    const containerRef = useRef<HTMLDivElement>(null);

    //console.log("original",cardsLayout,"melangé",shuffleArray(tmpArr))
    const onFilter = (item:{name:string,isChecked:boolean,label:string}) => {
        updateFilters((state) => {
          const items = state.map(f => {
            return {name:f.name,isChecked:false,label:f.label}
          })
          const itemFilter = items.find((f)=>f.label === item.label)
          const index = items.findIndex((f)=>f.label === item.label)
          if (itemFilter && index > -1) {
            itemFilter.isChecked = true;
            items.splice(index,1,itemFilter)
            return items
          }
          return state
        });
    };
    useEffect(()=>{
      const handleResize = () => {
        const num = Math.floor((window.innerWidth *.85 - 16) / 250)
        console.log("num",num,"window.innerWidth *.85 / 250",window.innerWidth *.85 / 250,"window.innerWidth",window.innerWidth,"num",num)
        setNoOfCols(num);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Nettoyer l'écouteur d'événements lorsque le composant est démonté
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    useEffect(()=>{
      const container = containerRef.current;
      const select = Array.from(document.querySelectorAll(".styles_isotope-container__3X0JH .item"))
      const isotopSelect = document.querySelector(".styles_isotope-container__3X0JH") as HTMLElement
      
      const row = Math.ceil(select.length / noOfCols);
      const height = (row * 300) + ((10 * (row - 1)) === 0 ? 10 : (10 * (row - 1)))
      isotopSelect.style.height = height + 'px';
      const columnCount = select.length <= noOfCols ? select.length : noOfCols
      const width = (columnCount * 250) + (10 * (columnCount - 1)) + 20
      isotopSelect.style.width = width + 'px';
      // Fonction de callback pour le MutationObserver
      
      const handleMutations = (mutationsList:any[]) => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const select = Array.from(document.querySelectorAll(".styles_isotope-container__3X0JH .item"))
            const isotopSelect = document.querySelector(".styles_isotope-container__3X0JH") as HTMLElement
            const row = Math.ceil(select.length / noOfCols);
            const height = (row * 300) + ((10 * (row - 1)) === 0 ? 10 : (10 * (row - 1)))
            isotopSelect.style.height = height + 'px';
            const columnCount = select.length <= noOfCols ? select.length : noOfCols
            const width = (columnCount * 250) + (10 * (columnCount - 1)) + 20
            isotopSelect.style.width = width + 'px';
            console.log('Un enfant a été ajouté ou supprimé:', select.length,"row",row,"height",height,"width",width);
            return
          }
        }
       //console.log("size",mutationsList.length)
      };
      // Créer une instance de MutationObserver
      const observer = new MutationObserver(handleMutations);

      // Configurer l'observateur pour surveiller les enfants du conteneur
      if (container) {
        observer.observe(container, { childList: true, subtree: true });
      }

      // Nettoyer l'observateur lorsque le composant est démonté
      return () => {
        observer.disconnect();
      };
    },[])
    console.log("noOfCols",noOfCols)
    return (
        <Element className="mt-[75px]" name="reference">
            <div className='bg-secondary h-[400px]'>
                <h1 className='mb-10 mx-[calc(15%/2)] pt-[20px] uppercase text-fifty'>Nos références</h1>
                <p className='mx-[calc(15%/2)] text-fifty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur.</p>
            </div>
            <div className='w-[85%] mx-auto mt-[-160px] min-h-[160px]'>
                <nav className='flex justify-center items-center gap-4 bg-fifty p-2 flex-wrap'>
                    {
                        filters.map((item)=>{
                            return (
                              <div className={`cursor-pointer hover:underline hover:text-secondary ${item.isChecked ? 'text-secondary' : 'text-primary'}`} key={`${item.label}_key`} onClick={()=>onFilter(item)}>{item.name}</div> 
                            )
                        })
                    }
                </nav>
                <div ref={containerRef} className="flex justify-center items-center w-full mt-5">
                    <IsoTopeGrid
                    gridLayout={cardsLayout} // gridlayout of cards
                    noOfCols={noOfCols} // number of columns show in one row
                    unitWidth={250} // card width of 1 unit
                    unitHeight={300} // card height of 1 unit
                    filters={filters} // list of selected filters
                    >
                    {cardsLayout.map((card:any) => (
                        <div key={card.id} className='item !border-0 overflow-hidden relative group'>
                          <img src={card.content.link} alt={card.content.title} />
                          <div className={`bg-white p-2 absolute bottom-0 left-0 translate-y-[150px] transition-transform duration-700 ease-in-out group-hover:translate-y-0 w-full siteInfo overflow-hidden cursor-pointer`}>
                            <div className='flex justify-between items-center gap-2'>
                              <h4 className='text-primary font-semibold text-[18px] mb-2 text-ellipsis overflow-hidden whitespace-nowrap flex-1'>{card.content.title}</h4>
                              <span className='text-[11px] text-[#aaa] '>{card.content.mode}</span>
                              
                            </div>
                            <p className='hidden p-[10px] text-[14px] bg-[#060641] text-white translate-y-[0px]'>{card.content.shortText}</p>
                          </div>
                        </div>
                    ))}
                    </IsoTopeGrid>
                </div>
            </div>
        </Element>
    )
}

export default Reference