export const priceList = [
    {
        title:"standartWebsite",
        devMethode:["Wordpress","ofHand"],
        content:[{
                price:"999.99",
                devType:{type:"devOn",outil:"outilTool"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            },{
                price:"1500",
                devType:{type:"handDev",outil:"handOutil"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ]
    },
    {
        title:"ecommerce",
        devMethode:["Wordpress","ofHand"],
        content:[{
                price:"2500",
                devType:{type:"devOn",outil:"outilTool"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            },{
                price:"4000",
                devType:{type:"handDev",outil:"handOutil"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ],
    },
    {
        title:"mobileApp",
        content:[{
                price:"2500",
                devType:{type:"Développé sous WORDPRESS",outil:"(Outil de gestion de contenu)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ]
    },
    {
        title:"saas",
        content:[{
                price:"2500",
                devType:{type:"Développé sous WORDPRESS",outil:"(Outil de gestion de contenu)"},
                options:["Sélection d'une palette de couleur","Domaine + hébergement + e-mail pendant 12 mois","Interface administrateur STANDARD","Site responsive (adapté tous supports)","Mise en place du contenu (textes & images)","Formulaire de contact","Liens de partage sur les réseaux sociaux","Optimisation du référencement","Statistiques de visite","Mise en ligne du site","Formation utilisation du site"]
            }
        ]
    }
]
export const services = [
    {
        id:1,
        service:{
            serviceName:"showcaseWebsite",
            shortDescript:"serviceWebsite",
            icon:"bx-code-alt"
        }   
    },
    {
        id:2,
        service:{
            serviceName:"reworkWebsite",
            shortDescript:"serviceWebsiteRework",
            icon:"bx-edit"
        }   
    },
    {
        id:3,
        service:{
            serviceName:"ecommerceWebste",
            shortDescript:"serviceEcommerce",
            icon:"bx-shopping-bag"
        }   
    },
    {
        id:4,
        service:{
            serviceName:"saas",
            shortDescript:"serviceSaas",
            icon:"bx-desktop"
        }   
    },
    {
        id:5,
        service:{
            serviceName:"mobileApp",
            shortDescript:"serviceApp",
            icon:"bx-devices"
        }   
    }
]

export const serviceDetail = {
    1:{
        title:"serviceSiteVitrineTitle",
        info:"serviceSiteVitrineDescrip",
        subtitle:"serviceSiteVitrineSubTitle",
        category:["WORDPRESS (CMS)","ofHand","hybride"],
        img:'/assets/images/fieger.png',
        content:{
            title:"serviceSiteVitrineDef",
            para:"serviceWebsite",
            souspara:"websiteVitrineAvantgeTitle",
            notion:"notionvitrine",
            contentPara:[
                {title:"serviceSiteVitrineAvantageTitel1",text:"serviceSiteVitrineAvantageDescrip1"},
                {title:"serviceSiteVitrineAvantageTitel2",text:"serviceSiteVitrineAvantageDescrip2"},
                {title:"serviceSiteVitrineAvantageTitel3",text:"serviceSiteVitrineAvantageDescrip3"},
                {title:"serviceSiteVitrineAvantageTitel4",text:"serviceSiteVitrineAvantageDescrip4"},
                {title:"serviceSiteVitrineAvantageTitel5",text:"serviceSiteVitrineAvantageDescrip5"}
            ],
        },
        cost:{
            title:"websiteVitrineCostTitle",
            para:"websiteVitrineCostPara",
            souspara:"websiteCostSubPara",
        },
        devMode:{
            1:{
                def:"defworpress",
                notion:"notionwordpress",
            },
            2:{
                def:"defWebsiteFromHand",
                notion:"notionWebsiteFromHand",
                
            },
            3:{
                def:"wordpressAndDevofHand",
                notion:"notionwordpressAndDevofHand",
            }
        }
    },
    2:{
        title:"serviceReworkWebsiteTitle",
        info:"serviceReworkWebsiteDescrip",
        subtitle:"serviceReworkWebsiteSubTitle",
        img:'/assets/images/fieger.png',
        category:["WORDPRESS (CMS)","ofHand","hybride"],
        content:{
            title:"serviceReworkWebsiteDef",
            para:"serviceWebsiteRework",
            souspara:"websiteReworkWebsiteAvantgeTitle",
            notion:"notionrework",
            contentPara:[
                {title:"serviceReworkWebsiteAvantageTitel1",text:"serviceReworkWebsiteAvantageDescrip1"},
                {title:"serviceReworkWebsiteAvantageTitel2",text:"serviceReworkWebsiteAvantageDescrip2"},
                {title:"serviceReworkWebsiteAvantageTitel3",text:"serviceReworkWebsiteAvantageDescrip3"},
                {title:"serviceReworkWebsiteAvantageTitel4",text:"serviceReworkWebsiteAvantageDescrip4"},
                {title:"serviceReworkWebsiteAvantageTitel5",text:"serviceReworkWebsiteAvantageDescrip5"}
            ],
        },
        cost:{
            title:"websiteReworkWebsiteCostTitle",
            para:"websiteReworkWebsiteCostPara",
            souspara:"websiteCostSubPara",
        },
        devMode:{
            1:{
                def:"defreworkworpress",
                notion:"notionwordpress",
            },
            2:{
                def:"defReworkWebsiteFromHand",
                notion:"notionWebsiteReworkFromHand",
            },
            3:{
                def:"wordpressAndDevofHandRework",
                notion:"notionwordpressAndDevofHand",
            }
        }   
    },
    3:{
        title:"serviceEcommerceWebsiteTitle",
        info:"serviceEcommerceWebsiteDescrip",
        subtitle:"serviceEcommerceWebsiteSubTitle",
        img:'/assets/images/fieger.png',
        category:["WORDPRESS (CMS)","ofHand","hybride"],
        content:{
            title:"serviceEcommerceWebsiteDef",
            para:"serviceEcommerce",
            souspara:"websiteEcommerceWebsiteAvantgeTitle",
            notion:"notionecommerce",
            contentPara:[
                {title:"serviceEcommerceWebsiteAvantageTitel1",text:"serviceEcommerceWebsiteAvantageDescrip1"},
                {title:"serviceEcommerceWebsiteAvantageTitel2",text:"serviceEcommerceWebsiteAvantageDescrip2"},
                {title:"serviceEcommerceWebsiteAvantageTitel3",text:"serviceEcommerceWebsiteAvantageDescrip3"},
                {title:"serviceEcommerceWebsiteAvantageTitel4",text:"serviceEcommerceWebsiteAvantageDescrip4"},
                {title:"serviceEcommerceWebsiteAvantageTitel5",text:"serviceEcommerceWebsiteAvantageDescrip5"}
            ],
        },
        cost:{
            title:"websiteEcommerceWebsiteCostTitle",
            para:"websiteEcommerceWebsiteCostPara",
            souspara:"websiteCostSubPara",
        },
        devMode:{
            1:{
                def:"defecommerceworpress",
                notion:"notionwordpress",
            },
            2:{
                def:"defEcommerceWebsiteFromHand",
                notion:"notionEcommerceFromHand",
            },
            3:{
                def:"wordpressAndDevofHandEcommerce",
                notion:"notionwordpressAndDevofHandEcommerce",
            }
        }   
    },
    4:{
        title:"serviceSaasTitle",
        info:"serviceSaasDescrip",
        subtitle:"serviceAppSubTitle",
        img:'/assets/images/fieger.png',
        category:["ofHand","progiciel"],
        content:{
            title:"serviceSaasDef",
            para:"serviceSaas",
            souspara:"saasAvantgeTitle",
            notion:"saasnotion",
            contentPara:[
                {title:"serviceSaasAvantageTitel1",text:"serviceSaasAvantageDescrip1"},
                {title:"serviceSaasAvantageTitel2",text:"serviceSaasAvantageDescrip2"},
                {title:"serviceSaasAvantageTitel3",text:"serviceSaasAvantageDescrip3"},
                {title:"serviceSaasAvantageTitel4",text:"serviceSaasAvantageDescrip4"}
            ],
        },
        cost:{
            title:"serviceSaasCostTitle",
            para:"serviceSaasCostPara",
            souspara:"serviceCostSubPara",
        },
        devMode:{
            1:{
                def:"defapphybride",
                notion:"notionhybride",
            },
            2:{
                def:"defappcrossplatform",
                notion:"notioncrossplatform",
            },
            3:{
                def:"defappnatif",
                notion:"notionnatif",
            }
        }
    },
    5:{
        title:"serviceAppTitle",
        info:"serviceAppDescrip",
        subtitle:"serviceAppSubTitle",
        img:'/assets/images/fieger.png',
        category:["apphybride","appcross","appnative"],
        content:{
            title:"serviceAppDef",
            para:"serviceApp",
            souspara:"appAvantgeTitle",
            notion:"appnotion",
            contentPara:[
                {title:"serviceAppAvantageTitel1",text:"serviceAppAvantageDescrip1"},
                {title:"serviceAppAvantageTitel2",text:"serviceAppAvantageDescrip2"},
                {title:"serviceAppAvantageTitel3",text:"serviceAppAvantageDescrip3"},
                {title:"serviceAppAvantageTitel4",text:"serviceAppAvantageDescrip4"},
                {title:"serviceAppAvantageTitel5",text:"serviceAppAvantageDescrip5"}
            ],
        },
        cost:{
            title:"serviceAppCostTitle",
            para:"serviceAppCostPara",
            souspara:"serviceCostSubPara",
        },
        devMode:{
            1:{
                def:"defapphybride",
                notion:"notionhybride",
            },
            2:{
                def:"defappcrossplatform",
                notion:"notioncrossplatform",
            },
            3:{
                def:"defappnatif",
                notion:"notionnatif",
            }
        }
    },
    avdistageApp:{
        1:{
            advantage:[
                {title:"avAppHybrideTitle1",text:"avAppHybrideText1"},
                {title:"avAppHybrideTitle2",text:"avAppHybrideText2"},
                {title:"avAppHybrideTitle3",text:"avAppHybrideText3"},
                {title:"avAppHybrideTitle4",text:"avAppHybrideText4"},
                {title:"avAppHybrideTitle5",text:"avAppHybrideText5"}
            ],
            disadvantage:[
                {title:"disAppHybrideTitle1",text:"disAppHybrideText1"},
                {title:"disAppHybrideTitle2",text:"disAppHybrideText2"},
                {title:"disAppHybrideTitle3",text:"disAppHybrideText3"},
                {title:"disAppHybrideTitle4",text:"disAppHybrideText4"},
                {title:"disAppHybrideTitle5",text:"disAppHybrideText5"}
            ]
        },
        2:{
            advantage:[
                {title:"avAppCrossPlatformTitle1",text:"avAppCrossPlatformText1"},
                {title:"avAppCrossPlatformTitle2",text:"avAppCrossPlatformText2"},
                {title:"avAppCrossPlatformTitle3",text:"avAppCrossPlatformText3"},
                {title:"avAppCrossPlatformTitle4",text:"avAppCrossPlatformText4"},
                {title:"avAppCrossPlatformTitle5",text:"avAppCrossPlatformText5"}
            ],
            disadvantage:[
                {title:"disAppCrossPlatformTitle1",text:"disAppCrossPlatformText1"},
                {title:"disAppCrossPlatformTitle2",text:"disAppCrossPlatformText2"},
                {title:"disAppCrossPlatformTitle3",text:"disAppCrossPlatformText3"},
                {title:"disAppCrossPlatformTitle4",text:"disAppCrossPlatformText4"},
                {title:"disAppCrossPlatformTitle5",text:"disAppCrossPlatformText5"}
            ]
        },
        3:{
            advantage:[
                {title:"avAppNatifTitle1",text:"avAppNatifText1"},
                {title:"avAppNatifTitle2",text:"avAppNatifText2"},
                {title:"avAppNatifTitle3",text:"avAppNatifText3"},
                {title:"avAppNatifTitle4",text:"avAppNatifText4"},
                {title:"avAppNatifTitle5",text:"avAppNatifText5"}
            ],
            disadvantage:[
                {title:"disAppNatifTitle1",text:"disAppNatifText1"},
                {title:"disAppNatifTitle2",text:"disAppNatifText2"},
                {title:"disAppNatifTitle3",text:"disAppNatifText3"},
                {title:"disAppNatifTitle4",text:"disAppNatifText4"},
                {title:"disAppNatifTitle4",text:"disAppNatifText4"}
            ]
        }
    },
    avdistage:{
        1:{
            advantage:[
                {title:"avWorpressTitle1",text:"avWorpressText1"},
                {title:"avWorpressTitle2",text:"avWorpressText2"},
                {title:"avWorpressTitle3",text:"avWorpressText3"},
                {title:"avWorpressTitle4",text:"avWorpressText4"},
                {title:"avWorpressTitle5",text:"avWorpressText5"}
            ],
            disadvantage:[
                {title:"disWorpressTitle1",text:"disWorpressText1"},
                {title:"disWorpressTitle2",text:"disWorpressText2"},
                {title:"disWorpressTitle3",text:"disWorpressText3"},
                {title:"disWorpressTitle4",text:"disWorpressText4"},
                {title:"disWorpressTitle5",text:"disWorpressText5"}
            ]
        },
        2:{
            advantage:[
                {title:"avOfHandTitle1",text:"avOfHandText1"},
                {title:"avOfHandTitle2",text:"avOfHandText2"},
                {title:"avOfHandTitle3",text:"avOfHandText3"},
                {title:"avOfHandTitle4",text:"avOfHandText4"},
                {title:"avOfHandTitle5",text:"avOfHandText5"}
            ],
            disadvantage:[
                {title:"disOfHandTitle1",text:"disOfHandText1"},
                {title:"disOfHandTitle2",text:"disOfHandText2"},
                {title:"disOfHandTitle3",text:"disOfHandText3"},
                {title:"disOfHandTitle4",text:"disOfHandText4"},
                {title:"disOfHandTitle5",text:"disOfHandText5"}
            ]
        },
        3:{
            advantage:[
                {title:"avHybrideTitle1",text:"avHybrideText1"},
                {title:"avHybrideTitle2",text:"avHybrideText2"},
                {title:"avHybrideTitle3",text:"avHybrideText3"},
                {title:"avHybrideTitle4",text:"avHybrideText4"},
                {title:"avHybrideTitle5",text:"avHybrideText5"}
            ],
            disadvantage:[
                {title:"disHybrideTitle1",text:"disHybrideText1"},
                {title:"disHybrideTitle2",text:"disHybrideText2"},
                {title:"disHybrideTitle3",text:"disHybrideText3"}
            ]
        }
    }
}
interface ReferenceContentItem {
    img: string;
    projet: string;
    refId: number;
    index:number;
    name:string;
    cat:string;
    mode:string;
    shortText:string;
}
interface siteInterface {
    title:string,
    proprio:string,
    img:string,
    description : {title:string,para:string[]},
    infoSite:{title:string,year:string,cat:string,techno:string[],mode:string,link:string},
    task:string[]
}

interface RefItemContent {
    title: string;
    [key: number]: siteInterface;
}
  
interface ReferenceItem {
    title: string;
    referenceContent: ReferenceContentItem[];
}
interface refContent{
    [key: string]: RefItemContent;
}

interface Reference {
    [key: number]: ReferenceItem;
}

export const refDetailContent:refContent = {
    website: {
        title:"Site vitrine",
        1:{
            title:"Site internet pour",
            proprio:"Madame Gisabel",
            img: '/assets/images/fieger.png',
            description:{
                title:'Domaine d\'activité de',
                para:['Création du site internet de {name}, spécialisée dans la {open}co-écriture de livres pour entrepreneurs et particuliers{close}. Elle accompagne ses clients dans la réalisation de leurs projets littéraires, transformant leurs idées en ouvrages aboutis.\n','Ce site vitrine personnalisé met en avant ses différentes formules de {open}co-écriture{close}, adaptées aux besoins spécifiques de chaque auteur en devenir. Il détaille le processus collaboratif, de la conception à la publication, offrant une transparence totale sur les étapes clés de la création d\'un livre.\n',"Ce site vitrine sur mesure contient une interface d'administration ainsi qu'une expérience de navigation optimale sur tous types d'appareils.\n","Ce site internet renforce la visibilité et la crédibilité de {name} en tant que {open}co-écrivaine{close}, mettant en avant son expertise, son parcours littéraire ainsi que les témoignages de clients satisfaits. Cette plateforme reflète son engagement à aider les auteurs à concrétiser leurs rêves d'écriture.\n"]
            },
            infoSite:{
                title:'Infos projet web',
                year:"2024",
                cat:"Site vitrine sous wordpress",
                techno:['HTML5','Bootstrap','JavaScript',"JQuery","WordPress",'CSS3'],
                mode:'WordPress',
                link:'https://test.com'
            },
            task:['Définition de la charte graphique (palette couleur,typographie...)','mise en place du template','correction du style',"Ajout de composant & plugins & images & pages & fonctionnalités","Ajustement nécessaire","Test","Dépliement"]
        }
    }
}
export const reference: Reference = {
    1: {
      title: "websiteVitrineReferenceTitle",
      referenceContent: [
        {
          img: '/assets/images/fieger.png',
          projet: 'Fieger',
          refId: 1,
          index:1,
          name:"Dimina Mbal",
          mode:"Fait sous WordPress",
          shortText:"Refonte site",
          cat:'website'
        },
        {
          img: '/assets/images/fieger.png',
          projet: 'Gymrenat',
          refId: 1,
          index:2,
          name:"Dimina Mbal",
          mode:"Codé de A a Z",
          shortText:"Crétion site vitrine",
          cat:'website'
        },
        {
          img: '/assets/images/fieger.png',
          projet: 'Charlotte consulting',
          refId: 1,
          index:3,
          name:"Dimina Mbal",
          mode:"Codé de A à Z",
          shortText:"Création site plus blog",
          cat:'website'
        },
        {
          img: '/assets/images/fieger.png',
          projet: 'Titre du projet',
          refId: 1,
          index:4,
          name:"Dimina Mbal",
          mode:"Fait sous WordPress",
          shortText:"Refonte site",
          cat:'website'
        }
      ]
    },
    2: {
        title: "websiteReworkReferenceTitle",
        referenceContent: [
          {
            img: '/assets/images/fieger.png',
            projet: 'Titre du projet',
            refId: 1,
            index:5,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Site E-commerce",
            cat:'ecommerce'
          },
          {
            img: '/assets/images/fieger.png',
            projet: 'Blog',
            refId: 1,
            index:6,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Site E-commerce",
            cat:'ecommerce'
          },
          {
            img: '/assets/images/fieger.png',
            projet: 'Kebab 78',
            refId: 1,
            index:7,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Site E-commerce",
            cat:'ecommerce'
          },
          {
            img: '/assets/images/fieger.png',
            projet: 'Chicken grill',
            name:"Dimina Mbal",
            refId: 1,
            index:8,
            mode:"Codé de A à Z",
            shortText:"Site E-commerce",
            cat:'ecommerce'
          }
        ]
    },
    3: {
        title: "websiteEcommerReferenceTitle",
        referenceContent: [
          {
            img: '/assets/images/fieger.png',
            projet: 'LovSid Android',
            refId: 1,
            name:"Dimina Mbal",
            index:9,
            mode:"Codé de A à Z",
            shortText:"Appli de rencontre version android",
            cat:'app'
          },
          {
            img: '/assets/images/fieger.png',
            projet: 'LovSid IOS',
            refId: 1,
            index:10,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Appli de rencontre version IOS",
            cat:'app'
          }
        ]
    },
    4: {
        title: "Quelques créations site vitrine",
        referenceContent: [
          {
            img: '/assets/images/fieger.png',
            projet: 'LovSid',
            refId: 1,
            index:11,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Site de rencontre",
            cat:'saas'
          },
          {
            img: '/assets/images/fieger.png',
            projet: 'Location de salle',
            refId: 1,
            index:12,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Site E-commerce",
            cat:'saas'
          },
          {
            img: '/assets/images/fieger.png',
            projet: 'Miror Soul',
            refId: 1,
            index:13,
            name:"Dimina Mbal",
            mode:"Codé de A à Z",
            shortText:"Site reseaux social",
            cat:'saas'
          }
        ]
    }
};

export const pathwayData = [
    {
        title:'title1',
        country:'countryDe',
        periode:"periode1",
        description:"description1"
    },
    {
        title:'title2',
        country:'countryFr',
        periode:"periode2",
        description:"description2"
    },
    {
        title:'title3',
        country:'countryFr',
        periode:"periode3",
        description:"description3"
    }
]
export const experienceData = [
    {
        title:'exTitle1',
        country:'countryDe',
        periode:"exPeriode1",
        enterprice:"enterprice1",
        description:"exDescription1"
    },
    {
        title:'exTitle2',
        country:'countryDe',
        periode:"exPeriode2",
        enterprice:"enterprice2",
        description:"exDescription2"
    },
    {
        title:'exTitle3',
        country:'countryFr',
        periode:"exPeriode3",
        enterprice:"enterprice3",
        description:"exDescription3"
    },
    {
        title:'exTitle4',
        country:'countryFr',
        periode:"exPeriode4",
        enterprice:"enterprice4",
        description:"exDescription4"
    },
    {
        title:'exTitle5',
        country:'countryFr',
        periode:"exPeriode5",
        enterprice:"enterprice5",
        description:"exDescription5"
    }
]
  