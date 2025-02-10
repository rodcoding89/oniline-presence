import { Element } from 'react-scroll';
import IsoTopeGrid from "react-isotope";
import { useEffect, useState } from 'react';
import { reference } from '../utils/constant';

interface ReferenceProps{

}

function createCardObjet(){
  const gridData:any = []
  Object.values(reference).forEach((item)=>{
    item.referenceContent.forEach((val:any)=>{
      const item = {"id":'label'+(val.index).toString(),"content":{title:val.projet,link:val.img},"row":0,"col":0,"w":1,"h":1,"filter":[val.cat]}
      gridData.push(item)
    })
  })
  return gridData;
}
const cardsData = [
    {
      "id": "a",
      "content":"My Data 1",
      "row": 0,
      "col": 0,
      "w": 1,
      "h": 1,
      "filter": ["website"]
    },
    {
      "id": "b",
      "content":"My Data 2",
      "row": 0,
      "col": 1,
      "w": 1,
      "h": 1,
      "filter": ["saas"]
    },
    {
      "id": "c",
      "content":"My Data 3",
      "row": 0,
      "col": 3,
      "w": 1,
      "h": 1,
      "filter": ["website"]
    },
    {
      "id": "d",
      "content":"My Data 4",
      "row": 1,
      "col": 0,
      "w": 1,
      "h": 1,
      "filter": ["ecommerce"]
    },
    {
      "id": "e",
      "content":"My Data 5",
      "row": 1,
      "col": 1,
      "w": 1,
      "h": 1,
      "filter": ["app"]
    },
    {
      "id": "f",
      "content":"My Data 6",
      "row": 1,
      "col": 2,
      "w": 1,
      "h": 1,
      "filter": ["ecommerce"]
    },
    {
      "id": "h",
      "content":"My Data 7",
      "row": 2,
      "col": 0,
      "w": 1,
      "h": 1,
      "filter": ["saas"]
    }
  ];
  
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
    console.log(createCardObjet(),cardsData)
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
        console.log("num",num,"window.innerWidth *.85 / 250",window.innerWidth *.85 / 250,"window.innerWidth",window.innerWidth)
        setNoOfCols(num);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Nettoyer l'écouteur d'événements lorsque le composant est démonté
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
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
                <div className="flex justify-center items-center w- h-[500px]">
                    <IsoTopeGrid
                    gridLayout={cardsLayout} // gridlayout of cards
                    noOfCols={noOfCols} // number of columns show in one row
                    unitWidth={250} // card width of 1 unit
                    unitHeight={300} // card height of 1 unit
                    filters={filters} // list of selected filters
                    >
                    {cardsLayout.map((card:any) => (
                        <div key={card.id} className=''>
                        {card.content.title}
                        </div>
                    ))}
                    </IsoTopeGrid>
                </div>
            </div>
        </Element>
    )
}

export default Reference