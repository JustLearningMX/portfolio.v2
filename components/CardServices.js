import { createElement } from "../js/createNodes.js";
import { services } from "../js/services.json.js";

const cardServices = (serviceItem) => {
    const services = document.querySelector('.services');
    const { service, description } = serviceItem;

    const card = createElement('div', [{type: 'class', name: `service`}]);
    const h3 = createElement('h3', [{type: 'class', name: ``}]);
    const p = createElement('p', [{type: 'class', name: ``}]);

    h3.textContent = service;
    p.textContent = description;

    card.appendChild(h3);
    card.appendChild(p);

    services.appendChild(card);
};

const grid = () => {
     services.forEach((service)=> {
        cardServices(service);
    });
};

grid();