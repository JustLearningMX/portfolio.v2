import { createInputs } from '../components/input.js';
import { contactInputs } from './ContactFormFields.js';
import { createElement } from './createNodes.js';

const contactSection = document.querySelector('.main__contact__form');

const classes = {
    divInputContainer: 'contact__form__inputContainer',
    inputData: 'form__inputContainer-data',
    labelTextForInput: 'form__inputContainer-text',    
    spanErrorMsg: 'form__inputContainer-error',
};

const createForm = ()=>{

    contactInputs.map(
        (inputItem)=> {
            const input = createInputs(classes, inputItem); //classes, input
            contactSection.appendChild(input);
        }
    );

    const divTxtAreaContainer = createElement('div', [{type: 'class', name: `${classes.divInputContainer}`}]);
    const txtAreaMessage = createElement('textarea', [
        {type: 'class', name: `${classes.inputData} textArea`},
        {type: `name`, name: `message`},
        {type: `rows`, name: `10`},
        {type: `cols`, name: `40`},
        {type: `placeholder`, name: `Message`},
    ]);

    divTxtAreaContainer.appendChild(txtAreaMessage);
    contactSection.appendChild(divTxtAreaContainer);

    const divInputSubmitContainer = createElement('div', [{type: 'class', name: `${classes.divInputContainer} contact__form__txtAreaContainer`}]);
    const inputButton = createElement('input', [
        {
          type: 'id', 
          name: 'input-button'
        },
        {
          type: 'class', 
          name: 'submittButton'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Send message'
        }
      ]);

    divInputSubmitContainer.appendChild(inputButton);
    contactSection.appendChild(divInputSubmitContainer);

};

createForm();