/**
 * Function to handle canceling overlays.
 * @param {string} selector - The CSS selector of the overlay to close.
 * @returns {Function} The event handler function.
 */
export const handleCancel = (selector) => () => {
    document.querySelector(selector).open = false; // Close the overlay
};

export const openSearchOverlay = () => {
    const searchOverlay = document.querySelector("[data-search-overlay]");
    if (searchOverlay) {
        searchOverlay.open = true; // Open the search overlay
        const searchInput = searchOverlay.querySelector("[data-search-input]");
        if (searchInput) {
            searchInput.focus(); // Focus on the search input
        }
    }
};

/**
 * Function to close the specified overlay.
 * @param {string} selector - The CSS selector of the overlay to close.
 */
export const closeOverlay = (selector) => {
    const overlay = document.querySelector(selector);
    if (overlay) {
        overlay.open = false; // Close the overlay
    }
};