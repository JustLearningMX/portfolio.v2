import { projects } from "../utils/projects.js";
import { card } from "../components/card.js";

const projectSection = document.querySelector('.portfolio__container');

const classes = {
    divCard: 'proyectos__card__container',
    divCardImg: 'proyectos__card___imgContainer',
    imgCard: 'portfolio__img proyectos__card-img',
    divCardData: 'proyectos__card___datosContainer',
    cardName: 'proyectos__card-nombre',
    cardDescription: 'proyectos__card-descripcion',

    divCardRepo: 'proyectos__card__repo',
    divCardRepoLink: 'proyectos__card__repo-link',
    divCardDemoLink: 'proyectos__card__demo-link',
    repo_demo_title: 'repo_demo_title',
    divCardStack: 'proyectos__card__stack',
    /*'divCard': 'proyectos__card__container',
    'divCardImg': 'proyectos__card___imgContainer',
    'imgCard': 'proyectos__card-img',
    
    'divCardDatos': 'proyectos__card___datosContainer',
    'nombreCard': 'proyectos__card-nombre',
    'descripcionCard': 'proyectos__card-descripcion',
    

    'divCardStackItem': 'proyectos__card__stack-item',*/
};

const createCards = ()=>{

    projects.map(
        ( project)=>{
            const projectCard = card(classes, project);
            projectSection.appendChild(projectCard);
        }
    );
};

createCards();