/**
 * Header search component.
 * @module HeaderSearchComponent
 * @extends HTMLElement
 */
class HeaderSearchComponent extends HTMLElement {
    /**
     * Creates an instance of HeaderSearchComponent.
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
        this.attachEventListeners();
    }

    /**
     * Renders the header search component.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Add your CSS styles for the search component here */
                .header-search {
                    display: flex;
                    align-items: center;
                }

                .search-icon {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }

                .search-icon::before {
                    content: "\\1F50D"; /* Unicode for search icon */
                    font-size: 1.5rem;
                    color: #333;
                }

                .search-icon:hover {
                    color: #007bff; /* Adjust hover color as needed */
                }
            </style>
            <div class="header-search">
                <button class="search-icon" aria-label="Search" data-search-icon>
                    <!-- Add HTML for the search icon -->
                </button>
            </div>
        `;
    }

    /**
     * Attaches event listeners for the search icon.
     */
    attachEventListeners() {
        this.shadowRoot.querySelector("[data-search-icon]").addEventListener("click", () => {
            // Dispatch a custom event to signal search icon click
            this.dispatchEvent(new Event("search-icon-click"));
        });
    }
}

customElements.define('header-search', HeaderSearchComponent);