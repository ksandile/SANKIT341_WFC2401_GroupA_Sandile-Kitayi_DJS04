/**
 * Custom element representing a modal for previewing books.
 * @module BookPreviewModalComponent
 * @extends HTMLElement
 */
class BookPreviewModalComponent extends HTMLElement {
    /**
     * Creates an instance of BookPreviewModalComponent.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * Lifecycle callback invoked when the element is added to the DOM.
     */
    connectedCallback() {
        this.render();
        // event listeners
        this.shadowRoot.querySelector("[data-close-button]").addEventListener("click", this.closeModal.bind(this));
        this.shadowRoot.querySelector("[data-modal-overlay]").addEventListener("click", this.closeModal.bind(this));
        this.shadowRoot.querySelector(".modal-content").addEventListener("click", (event) => event.stopPropagation());
    }

    /**
     * Renders the modal component.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* CSS styles for the book preview modal */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .modal-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                }
                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                }
            </style>
            <div class="modal-overlay" data-modal-overlay>
                <div class="modal-content">
                    <button class="close-button" data-close-button>&times;</button>
                </div>
            </div>
        `;
    }

    /**
     * Closes the modal by removing it from the DOM.
     */
    closeModal() {
        this.remove(); // Remove the modal from the DOM
    }
}

customElements.define('book-preview-modal', BookPreviewModalComponent);