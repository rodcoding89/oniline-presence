import { useState } from 'react';
import {Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
interface PriceProps{

}
const priceList = [
    {
        title:"Site vitrine standard",
        devMethode:["Wordpress","Sur mesure"],
        content:[{
                price:"999.99",
                devType:{type:"Développé sous WORDPRESS",outil:"(Outil de gestion de contenu)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            },{
                price:"1500",
                devType:{type:"Développé SUR-MESURE",outil:"(Codage à la main)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ]
    },
    {
        title:"Plateforme e-commerce",
        devMethode:["Wordpress","Sur mesure"],
        content:[{
                price:"2500",
                devType:{type:"Développé sous WORDPRESS",outil:"(Outil de gestion de contenu)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            },{
                price:"4000",
                devType:{type:"Développé SUR-MESURE",outil:"(Codage à la main)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ],
    },
    {
        title:"Application mobile",
        content:[{
                price:"2500",
                devType:{type:"Développé sous WORDPRESS",outil:"(Outil de gestion de contenu)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ]
    },
    {
        title:"Logiciel métiers / Saas",
        content:[{
                price:"2500",
                devType:{type:"Développé sous WORDPRESS",outil:"(Outil de gestion de contenu)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ]
    }
]
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
        <Element className="min-h-[200px] mt-[75px]" name="price">
            <div>
                <div className='w-[85%] mx-auto'>
                    <h1 className='text-center text-thirty font-semibold mb-4 uppercase'>Tarifs</h1>
                    <h4 className='text-center text-[#aaa] text-[1.4em] mb-10'>Un tarif adapté à un site internet de qualité !</h4>
                    <div className='grid grid-cols-[repeat(auto-fit,calc(100%/4-20px))] gap-5 justify-center'>
                        {
                            priceList.map((item,index)=>{
                                return (
                                    <div key={index} className='self-stretch p-4 bg-fifty w-full'>
                                        <h3 className='text-center uppercase font-bold text-[1.3em] flex flex-col justify-center items-center'>{item.title}<span className='w-1/5 h-[6px] bg-thirty mb-5 mt-3'></span></h3>
                                        {
                                            item.devMethode && (
                                                <div className='flex justify-center w-full'>
                                                    <div className='flex justify-around items-center gap-3 py-2 px-3 bg-white'>
                                                    {
                                                        item.devMethode.map((m,i)=>{
                                                            return(
                                                                <p onClick={()=>handleContentSwitch(index, i)} className={` relative cursor-pointer uppercase text-[.9em] before:w-0 
                                                                before:transition-all before:duration-700 before:ease-in-out z-0 ${activeContentIndex[index] === i ? ' py-1 px-2 before:absolute before:left-0 before:top-0 before:bg-fifty before:!w-full before:h-full before:rounded-xl before:z-[-1] ':''}`} key={i}>{m}</p>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <h6 className='text-center text-[#aaa] uppercase mt-4 mb-[-4px]'>A partir de</h6>
                                        <div className='text-center w-full flex flex-col justify-center items-center'>
                                            <span className='text-center text-[3em] relative'>{item.content[activeContentIndex[index] || 0].price}<em className='absolute top-[3px] right-[-8px] !text-[.4em]'>€</em></span>
                                            <span className='w-1/5 block h-[6px] bg-thirty mb-5 mt-2'></span>
                                        </div>
                                        <p className='block text-center font-medium'>{item.content[activeContentIndex[index] || 0].devType.type}</p>
                                        <span className='block text-center text-[.8em] mb-3'>{item.content[activeContentIndex[index] || 0].devType.outil}</span>
                                        <ul className='m-0 p-0 flex flex-col justify-start items-start gap-2 w-full'>
                                            {
                                                item.content[activeContentIndex[index] || 0].options.map((o,k)=>{
                                                    return (
                                                        <li key={k} className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 ${k%2 === 0 ? 'bg-[#E8E8E8]' : ''}`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>{o}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <span className='cursor-pointer px-6 mt-3 py-3 text-fifty bg-thirty hover:text-thirty hover:bg-white flex items-center justify-center transition-hover duration-500 ease-in'>
                                        <Link
                                        activeClass="active"
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
                    <div className='flex justify-center items-start gap-4 mt-10'>
                        <div className='w-1/4 p-4 bg-fifty flex-wrap'>
                            <h3 className='text-center uppercase font-bold text-[1.3em] flex flex-col justify-center items-center'>Forfais maintenance<span className='w-1/5 h-[6px] bg-thirty mb-5 mt-3'></span></h3>
                            <div className='text-center w-full flex flex-col justify-center items-center'>
                                <p className='font-semibold text-[1.7em]'>50<em className='font-light text-[.5em] mt-[-1px]'>€/Heures ou</em></p>
                                <span className='text-center text-[3em] relative'>500<em className='absolute top-[3px] right-[-41px] !text-[.4em]'>€/AN</em></span>
                                <span className='w-1/5 block h-[6px] bg-thirty mb-5 mt-2'></span>
                            </div>
                            <ul className='m-0 p-0 flex flex-col justify-start items-start gap-2 w-full'>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 bg-[#E8E8E8]`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>Mise a jour site & plugins</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>Modification graphique & contenu</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 bg-[#E8E8E8]`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>Sauvegarde externalisé mensuel</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>Optimisation performance</li>
                                <li className={`flex justify-start items-center py-[6px] px-2 w-full gap-1 bg-[#E8E8E8]`}><Icon name="bx-plus" size='1.3em' color='var(--color-thirty)'/>Restauration en cas de piratage</li>
                            </ul>
                            <span className='cursor-pointer px-6 mt-3 py-3 text-fifty bg-thirty hover:text-thirty hover:bg-white flex items-center justify-center transition-hover duration-500 ease-in'>
                                <Link
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                offset={-65} 
                                duration={500} 
                                to={`contact`} 
                                >Me contacter
                                </Link>
                            </span>
                        </div>
                        <div className='w-1/4 p-4 bg-fifty'>
                            <h3 className='text-center uppercase font-bold text-[1.3em] flex flex-col justify-center items-center'>Développement spécifique<span className='w-1/5 h-[6px] bg-thirty mb-5 mt-3'></span></h3>
                            <h6 className='text-center text-[#aaa] uppercase mt-4 mb-[-4px]'>Taux journalier moyen</h6>
                            <div className='text-center'>
                                <span className='text-center text-[3em] relative'>400<em className='absolute top-[3px] right-[-62px] !text-[.4em]'>€/JOUR</em></span>
                            </div>
                            <span className='cursor-pointer px-6 mt-3 py-3 text-fifty bg-thirty hover:text-thirty hover:bg-white flex items-center justify-center transition-hover duration-500 ease-in'>
                                <Link
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                offset={-65} 
                                duration={500} 
                                to={`contact`} 
                                >Me contacter
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