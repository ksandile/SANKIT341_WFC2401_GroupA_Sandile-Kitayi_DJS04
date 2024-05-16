/**
 * Represents a custom settings overlay component.
 * @class
 * @extends HTMLElement
 */
class SettingsOverlayComponent extends HTMLElement {
    /**
     * Creates an instance of SettingsOverlayComponent.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * Lifecycle method called when the component is connected to the DOM.
     * Renders the settings overlay and attaches event listeners.
     */
    connectedCallback() {
        this.render();
        // Add event listeners here
        this.shadowRoot.querySelector("[data-settings-cancel]").addEventListener("click", this.handleCancel.bind(this));
        this.shadowRoot.querySelector("[data-settings-form]").addEventListener("submit", this.handleFormSubmit.bind(this));
    }

    /**
     * Renders the settings overlay component.
     */
    render() {
        this.shadowRoot.innerHTML = `
            <div class="settings-overlay">
                <!-- settings form -->
                <form data-settings-form>
                    <label for="theme">Theme</label>
                    <select name="theme" id="theme">
                        <option value="day">Day</option>
                        <option value="night">Night</option>
                    </select>
                    <button type="submit" data-settings-save>Save</button>
                    <button type="button" data-settings-cancel>Cancel</button>
                </form>
            </div>
            <style>
                /* styling */
                .overlay {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    border-width: 0;
                    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
                    animation-name: enter;
                    animation-duration: 0.6s;
                    z-index: 10;
                    background-color: rgba(var(--color-light), 1);
                  }
            </style>
        `;
    }

    /**
     * Handles the cancel action.
     */
    handleCancel() {
        this.closeOverlay();
    }

    /**
     * Handles the form submission.
     * @param {Event} event - The form submission event.
     */
    handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { theme } = Object.fromEntries(formData);
        // You can now handle the theme value as needed, for example, dispatching an event to notify the application about the theme change
        this.closeOverlay();
    }

    /**
     * Closes the settings overlay.
     */
    closeOverlay() {
        this.dispatchEvent(new CustomEvent("close"));
    }
}

// Define the custom element
customElements.define('settings-overlay', SettingsOverlayComponent);