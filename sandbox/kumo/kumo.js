/*
 * KUMO — opt-in visual mode
 *
 * theme.js remains the source of truth for the global light/dark theme.
 * This file only coordinates the KUMO splash class with that shared switch.
 */
document.addEventListener("DOMContentLoaded", function () {
    const splash = document.getElementById("collapse1");
    const themeSwitch = document.getElementById("themeSwitch");
    const kumoChiSwitch = document.getElementById("kumoChiSwitch");

    if (!splash || !themeSwitch || !kumoChiSwitch) return;

    function resetKumo() {
        splash.classList.remove("雲血");
        splash.classList.add("grid-bg");
        kumoChiSwitch.setAttribute("aria-pressed", "false");
    }

    // KUMO is opt-in and always requires the established dark theme.
    kumoChiSwitch.addEventListener("click", function () {
        document.body.classList.remove("light-mode", "dark-mode-lights");
        document.body.classList.add("dark-mode");
        splash.classList.remove("grid-bg");
        splash.classList.add("雲血");
        kumoChiSwitch.setAttribute("aria-pressed", "true");
        themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    });

    // Let the shared theme.js listener finish first, then sync KUMO to its result.
    themeSwitch.addEventListener("click", function () {
        window.setTimeout(function () {
            if (document.body.classList.contains("light-mode")) {
                resetKumo();
            }
        }, 0);
    });
});
