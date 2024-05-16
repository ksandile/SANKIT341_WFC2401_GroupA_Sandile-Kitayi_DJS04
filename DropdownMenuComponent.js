/**
 * Represents a custom dropdown menu component.
 * @class
 * @extends HTMLElement
 */
class DropdownMenuComponent extends HTMLElement {
    /**
     * Creates an instance of DropdownMenuComponent.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
  
    /**
     * Lifecycle method called when the component is connected to the DOM.
     * Renders the dropdown menu.
     */
    connectedCallback() {
        this.render();
    }
  
    /**
     * Renders the dropdown menu based on component attributes.
     */
    render() {
        // Retrieve attributes from the component
        const { data, defaultValue, selector } = this.getAttributes();
        
        // Create a document fragment to hold the dropdown options
        const fragment = document.createDocumentFragment();
        
        // Add the default option to the fragment
        fragment.appendChild(this.createOptionElement("any", defaultValue));
        
        // Add each option from the data object to the fragment
        Object.entries(data).forEach(([id, name]) =>
            fragment.appendChild(this.createOptionElement(id, name))
        );
        
        // Set the HTML content of the shadow root to display the dropdown
        this.shadowRoot.innerHTML = `<select>${fragment.innerHTML}</select>`;
        
        // Append the dropdown to the specified selector in the DOM
        document.querySelector(selector).appendChild(this.shadowRoot);
    }
  
    /**
     * Retrieves attributes from the component.
     * @returns {Object} An object containing data, defaultValue, and selector.
     */
    getAttributes() {
        const data = JSON.parse(this.getAttribute('data'));
        const defaultValue = this.getAttribute('default-value') || 'Select';
        const selector = this.getAttribute('selector');
        return { data, defaultValue, selector };
    }
  
    /**
     * Creates an option element for the dropdown menu.
     * @param {string} value - The value of the option.
     * @param {string} name - The display name of the option.
     * @returns {HTMLOptionElement} The created option element.
     */
    createOptionElement(value, name) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = name;
        return option;
    }
}
  
// Define the custom element
customElements.define('dropdown-menu', DropdownMenuComponent);