/**
 * Function to create HTML elements
 */

//Receives the name of the HTML element to create and an object with its attributes
export const createElement = (element, attributes, required, autofocus) => {
    const node = document.createElement(element);

    if(attributes){
        attributes.map((attribute)=>{
            node.setAttribute(attribute.type, attribute.name);
        });
    };

    if(required){
        node.required = true;
    };

    if(autofocus){
        node.autofocus = true;
    }

    return node;
};