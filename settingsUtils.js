/**
 * Function to handle form submission in the settings overlay.
 * @param {Event} event - The form submission event.
 */
export const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target); // Get form data
    const { theme } = Object.fromEntries(formData); // Extract theme from form data
    // Set CSS variables based on selected theme
    const colorDark = theme === "night" ? "255, 255, 255" : "10, 10, 20";
    const colorLight = theme === "night" ? "10, 10, 20" : "255, 255, 255";
    document.documentElement.style.setProperty("--color-dark", colorDark);
    document.documentElement.style.setProperty("--color-light", colorLight);
    document.querySelector("[data-settings-overlay]").open = false; // Close the settings overlay
};