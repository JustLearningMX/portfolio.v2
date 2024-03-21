import { createElement } from '../js/createNodes.js';

export const createInputs = (classes, input)=>{

    const divInputContainer = createElement('div', [{type: 'class', name: `${classes.divInputContainer}`}]);
    const inputItem = createElement('input', [
        {type: 'class', name: `${classes.inputData} ${input.name}`},
        {type: `type`, name: `${input.type}`},
        {type: `name`, name: `${input.name}`},
    ]);

    if(input.placeholder)
        inputItem.placeholder = input.placeholder;

    if(input.value)
        inputItem.value = input.value;

    if(input.required)
        inputItem.required = true;
    
    if(input.autofocus)
        inputItem.focus();

    // inputItem.placeholder = '\xa0';

    const spanTextInput = createElement('span', [{type: 'class', name: `${classes.labelTextForInput}`}]);
    spanTextInput.textContent = input.label;

    const spanErrorMsg = createElement('span', [{type: 'class', name: `${classes.spanErrorMsg}`}]);
    spanErrorMsg.textContent = input.errorMsg;

    divInputContainer.appendChild(inputItem);
    divInputContainer.appendChild(spanTextInput);
    divInputContainer.appendChild(spanErrorMsg);

    return divInputContainer;
};