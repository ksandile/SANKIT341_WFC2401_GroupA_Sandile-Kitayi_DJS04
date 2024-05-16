/**
 * Show more button component.
 * @module ShowMoreButtonComponent
 * @extends HTMLElement
 */
class ShowMoreButtonComponent extends HTMLElement {
    /**
     * Creates an instance of ShowMoreButtonComponent.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Initialize any properties here
    }

    /**
     * Lifecycle callback invoked when the element is added to the DOM.
     */
    connectedCallback() {
        this.render();
        // Add event listener for click event
        this.shadowRoot.querySelector("[data-show-more-button]").addEventListener("click", this.handleShowMore.bind(this));
    }

    /**
     * Renders the show more button.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <button data-show-more-button>Show more</button>
            <style>
                /* Add your CSS styles for the show more button here */
                [data-show-more-button] {
                    padding: 0.5rem 1rem;
                    background-color: rgba(var(--color-blue), 1);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                [data-show-more-button]:hover {
                    background-color: rgba(var(--color-blue), 0.8);
                }
            </style>
        `;
    }

    /**
     * Handles the click event on the show more button.
     * Dispatches a custom event named "showMore".
     */
    handleShowMore() {
        // Handle show more functionality
        this.dispatchEvent(new CustomEvent("showMore"));
    }
}

customElements.define('show-more-button', ShowMoreButtonComponent);