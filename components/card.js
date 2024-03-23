import { createElement } from "../js/createNodes.js";
const __dir = './assets/projects/';

export const card = (classes, project) => {

    const card = createElement('div', [{type: 'class', name: `${classes.divCard}`}]);
    card.classList.add('cards');

    //Función que crea un contenedor para una imagen y agrega la imagen
    const imgContainer = (isProject)=>{

        const divCardImg = createElement('div', [{type: 'class', name: `${classes.divCardImg}`}]);
        const urlImg = isProject ? __dir  + project.img : project.img;

        const img = createElement('img', [
            {type: 'class', name: `${classes.imgCard}`},
            {type: 'src', name: `${urlImg}`},
            {type: 'alt', name: `${project.alt}`}]);
        
        divCardImg.appendChild(img);
        card.appendChild(divCardImg);

    };

    //Cards para los proyectos
    if(project.img && project.proyectos) {
        
        imgContainer(true);

        const divCardData = createElement('div', [{type: 'class', name: `${classes.divCardData}`}]);
        const cardName = createElement('p', [{type: 'class', name: `${classes.cardName}`}]);
        const cardDescription = createElement('p', [{type: 'class', name: `${classes.cardDescription}`}]);

        cardName.textContent = project.nombre;
        cardDescription.textContent = project.descripcion;

        divCardData.appendChild(cardName);
        divCardData.appendChild(cardDescription);


        /*const divCardRepo = crearElemento('div', [{type: 'class', name: `${classes.divCardRepo}`}]);
        const repoLink = crearElemento('a', [
            {type: 'class', name: `${classes.divCardRepoLink}`},
            {type: 'href', name: `${project.repositorio}`},
            {type: 'target', name: `_blank`}
        ]);
        const fontAwesomeRepo = crearElemento('i', [{type: 'class', name: `fa-brands fa-github-alt fa-lg`}]);
        const pRepo = crearElemento('p', [{type: 'class', name: `${classes.repo_demo_title}`}]);
        pRepo.textContent = 'Repo y demo links:';
        divCardRepo.appendChild(pRepo);
        repoLink.appendChild(fontAwesomeRepo);

        const demoLink = crearElemento('a', [
            {type: 'class', name: `${classes.divCardDemoLink}`},
            {type: 'href', name: `${project.demostracion}`},
            {type: 'target', name: `_blank`}
        ]);
        const fontAwesomeDemo = crearElemento('i', [{type: 'class', name: `fa-solid fa-play fa-lg`}]);
        demoLink.appendChild(fontAwesomeDemo);

        divCardRepo.appendChild(repoLink);
        divCardRepo.appendChild(demoLink);

        divCardData.appendChild(divCardRepo);

        const divCardStack = crearElemento('div', [{type: 'class', name: `${classes.divCardStack}`}]);
        if(project.stack){
            project.stack.map((item)=>{
                const stackItem = crearElemento('p', [{type: 'class', name: `${classes.divCardStackItem}`}]);
                stackItem.textContent = item;
                divCardStack.appendChild(stackItem);
            });
        };

        divCardData.appendChild(divCardStack);*/

        card.appendChild(divCardData);
    }

    /*if(project.iconAwesome){ //Cards para los skills y hobbies

        const p = crearElemento('p', [{type: 'class', name: `${classes.nombreCard}`}]);
        const i = crearElemento('i', [{type: 'class', name: `${project.iconAwesome}`}]);
        p.textContent = project.nombre;

        card.appendChild(i);
        card.appendChild(p);
    }

    if(project.img && !project.proyectos){ //Cards para Formación

        imgContainer(false);

        const divCardDatos = crearElemento('div', [{type: 'class', name: `${classes.divCardDatos}`}]);
        const nombreCard = crearElemento('p', [{type: 'class', name: `${classes.nombreCard}`}]);
        const carreraCard = crearElemento('p', [{type: 'class', name: `${classes.carreraCard}`}]);
        const periodoCard = crearElemento('p', [{type: 'class', name: `${classes.periodoCard}`}]);

        nombreCard.textContent = project.nombre;
        carreraCard.textContent = project.carrera;
        periodoCard.textContent = project.periodo;

        divCardDatos.appendChild(nombreCard);
        divCardDatos.appendChild(carreraCard);
        divCardDatos.appendChild(periodoCard);

        card.appendChild(divCardDatos);

    }*/

    return card;
};