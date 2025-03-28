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
        category:["WORDPRESS","ofHand"],
        img:'/assets/images/fieger.png',
        content:{
            title:"serviceSiteVitrineDef",
            para:"serviceWebsite",
            souspara:"websiteVitrineAvantgeTitle",
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
            souspara:"websiteVitrineCostSubPara",
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
      title: "Quelques créations site vitrine",
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
        title: "Quelques créations site vitrine",
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
        title: "Quelques créations site vitrine",
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
  