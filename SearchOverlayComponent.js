/**
 * Represents a custom search overlay component.
 * @class
 * @extends HTMLElement
 */
class SearchOverlayComponent extends HTMLElement {
    /**
     * Creates an instance of SearchOverlayComponent.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * Lifecycle method called when the component is connected to the DOM.
     * Renders the search overlay and attaches event listeners.
     */
    connectedCallback() {
        this.render();
        // Add event listeners here
        this.shadowRoot.querySelector("[data-search-input]").addEventListener("input", this.handleSearch.bind(this));
        this.shadowRoot.querySelector("[data-search-button]").addEventListener("click", this.handleSearch.bind(this));
    }

    /**
     * Renders the search overlay component.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <div class="search-overlay">
                <input type="text" data-search-input placeholder="Search..." />
                <button data-search-button>Search</button>
                <div class="search-results" data-search-results></div>
            </div>
            <style>
                /* Add your CSS styles for the search overlay here */
                .search-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 1rem;
                    background-color: rgba(var(--color-light), 1);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                }
                
                [data-search-input] {
                    width: calc(100% - 100px);
                    padding: 0.5rem;
                    font-size: 1rem;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 4px;
                }
                
                [data-search-button] {
                    padding: 0.5rem 1rem;
                    margin-left: 0.5rem;
                    background-color: rgba(var(--color-blue), 1);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                [data-search-button]:hover {
                    background-color: rgba(var(--color-blue), 0.8);
                }
                
                .search-results {
                    margin-top: 1rem;
                    max-height: 300px;
                    overflow-y: auto;
                    padding: 0.5rem;
                    background-color: white;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 4px;
                }

            </style>
        `;
    }

    /**
     * Handles the search action triggered by user input.
     */
    handleSearch() {
        const searchInput = this.shadowRoot.querySelector("[data-search-input]").value;
        // Implement search functionality here
        const searchResults = this.searchBooks(searchInput);
        this.displaySearchResults(searchResults);
    }

    /**
     * Searches for books based on the provided query.
     * @param {string} query - The search query.
     * @returns {Array} An array of search results.
     */
    searchBooks(query) {
        // convert the query to lowercase for case insensitive search
        const lowercaseQuery = query.toLowerCase();
        // filter books based on the query
        const searchResults = books.filter(book => {
            return (
                book.title.toLowerCase().includes(lowercaseQuery) || 
                authors[book.author].toLowerCase().includes(lowercaseQuery)
            );
        });
        return searchResults;
    }

    /**
     * Displays the search results in the search overlay.
     * @param {Array} results - An array of search results.
     */
    displaySearchResults(results) {
        const searchResultsContainer = this.shadowRoot.querySelector("[data-search-results]");
        searchResultsContainer.innerHTML = ""; // Clear previous results
        // Render each search result in the container
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.textContent = result.title;
            searchResultsContainer.appendChild(resultElement);
        });
    }
}

// Define the custom element
customElements.define('search-overlay', SearchOverlayComponent);