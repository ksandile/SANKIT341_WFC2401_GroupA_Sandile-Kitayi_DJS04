/**
 * Theme provider component.
 * @module ThemeProvider
 * @extends HTMLElement
 */
class ThemeProvider extends HTMLElement {
    /**
     * Creates an instance of ThemeProvider.
     */
    constructor() {
        super();
        // Define default theme
        this.theme = {
            primaryColor: '#007bff',
            secondaryColor: '#6c757d',
        };
    }

    /**
     * Lifecycle callback invoked when the element is added to the DOM.
     */
    connectedCallback() {
        // Apply default theme
        this.applyTheme();
    }

    /**
     * Applies the current theme by setting CSS variables.
     */
    applyTheme() {
        // Apply theme variables
        Object.keys(this.theme).forEach(property => {
            document.documentElement.style.setProperty(`--${property}`, this.theme[property]);
        });
    }

    /**
     * Sets the theme to the provided theme object and applies it.
     * @param {Object} theme - The theme object containing primary and secondary colors.
     */
    setTheme(theme) {
        // Update theme
        this.theme = theme;
        // Apply updated theme
        this.applyTheme();
    }
}

customElements.define('theme-provider', ThemeProvider);