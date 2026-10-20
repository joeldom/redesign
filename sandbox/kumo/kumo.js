/*
 * KUMO — opt-in visual mode
 *
 * theme.js remains the source of truth for the global light/dark theme.
 * This file coordinates the KUMO splash class with the shared theme switch.
 * Load it on pages that contain #collapse1, #themeSwitch, and #kumoChiSwitch.
 */
function initKumo() {
    const splash = document.getElementById("collapse1");
    const themeSwitch = document.getElementById("themeSwitch");
    const kumoChiSwitch = document.getElementById("kumoChiSwitch");

    // The shared script is also used by the standalone KUMO proof of concept.
    // Only the KUMO trigger and splash are essential; the theme switch is optional.
    if (!splash || !kumoChiSwitch) return;

    function resetKumo() {
        splash.classList.remove("雲血");
        splash.classList.add("grid-bg");
        kumoChiSwitch.setAttribute("aria-pressed", "false");
    }

    // Clicking JOELDOMBEK toggles KUMO on and off.
    kumoChiSwitch.addEventListener("click", function (event) {
        // On the main page the trigger is a link; use it as a toggle, not navigation.
        if (kumoChiSwitch.tagName === "A") event.preventDefault();

        if (splash.classList.contains("雲血")) {
            // Return directly to the base dark theme without requiring another control.
            document.body.classList.remove("light-mode", "dark-mode-lights");
            document.body.classList.add("dark-mode");
            resetKumo();
            if (themeSwitch) themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
            kumoChiSwitch.setAttribute("aria-label", "Activate KUMO visual mode");
            kumoChiSwitch.setAttribute("title", "Activate KUMO visual mode");
            return;
        }

        // KUMO always requires the established dark theme.
        document.body.classList.remove("light-mode", "dark-mode-lights");
        document.body.classList.add("dark-mode");
        splash.classList.remove("grid-bg");
        splash.classList.add("雲血");
        kumoChiSwitch.setAttribute("aria-pressed", "true");
        kumoChiSwitch.setAttribute("aria-label", "Deactivate KUMO visual mode");
        kumoChiSwitch.setAttribute("title", "Deactivate KUMO visual mode");
        if (themeSwitch) themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    });

    // Let the shared theme.js listener finish first, then sync KUMO to its result.
    if (themeSwitch) {
        themeSwitch.addEventListener("click", function () {
            window.setTimeout(function () {
                if (document.body.classList.contains("light-mode")) {
                    resetKumo();
                    kumoChiSwitch.setAttribute("aria-label", "Activate KUMO visual mode");
                    kumoChiSwitch.setAttribute("title", "Activate KUMO visual mode");
                }
            }, 0);
        });
    }
}

// Support normal bottom-of-page loading and scripts loaded after DOMContentLoaded.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKumo);
} else {
    initKumo();
}
