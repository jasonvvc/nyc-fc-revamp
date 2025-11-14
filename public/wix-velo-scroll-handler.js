/**
 * Wix Velo Code for Handling Iframe PostMessage Scrolling
 * 
 * INSTRUCTIONS:
 * 1. Go to your Wix page editor
 * 2. Add an HTML iframe element with your full-site.html
 * 3. Give your HTML element an ID (e.g., "htmlIframe")
 * 4. Add element IDs to your sections: #homeSection, #servicesSection, etc.
 * 5. Copy this code to your page code (Page Code panel in Wix Editor)
 * 6. Update the HTML element ID on line 16 to match your iframe element ID
 * 7. Update the section IDs in the sectionMap to match your actual Wix page element IDs
 */

import wixWindow from 'wix-window';

$w.onReady(function () {
    // Listen for messages from the iframe
    // IMPORTANT: Replace "#htmlIframe" with your actual HTML element ID
    $w("#htmlIframe").onMessage((event) => {
        let receivedData = event.data;
        
        // Check which button was clicked and scroll to the corresponding section
        if (receivedData === "home") {
            // Scroll to home section
            // Replace "#homeSection" with your actual home section element ID
            if ($w("#homeSection")) {
                $w("#homeSection").scrollTo()
                    .then(() => {
                        console.log("Scrolled to home section");
                    })
                    .catch((error) => {
                        console.error("Error scrolling to home:", error);
                    });
            }
        } 
        else if (receivedData === "services") {
            // Scroll to services section
            // Replace "#servicesSection" with your actual services section element ID
            if ($w("#servicesSection")) {
                $w("#servicesSection").scrollTo()
                    .then(() => {
                        console.log("Scrolled to services section");
                    })
                    .catch((error) => {
                        console.error("Error scrolling to services:", error);
                    });
            }
        } 
        else if (receivedData === "portfolio") {
            // Scroll to portfolio section
            // Replace "#portfolioSection" with your actual portfolio section element ID
            if ($w("#portfolioSection")) {
                $w("#portfolioSection").scrollTo()
                    .then(() => {
                        console.log("Scrolled to portfolio section");
                    })
                    .catch((error) => {
                        console.error("Error scrolling to portfolio:", error);
                    });
            }
        } 
        else if (receivedData === "about") {
            // Scroll to about section
            // Replace "#aboutSection" with your actual about section element ID
            if ($w("#aboutSection")) {
                $w("#aboutSection").scrollTo()
                    .then(() => {
                        console.log("Scrolled to about section");
                    })
                    .catch((error) => {
                        console.error("Error scrolling to about:", error);
                    });
            }
        } 
        else if (receivedData === "contact") {
            // Scroll to contact section
            // Replace "#contactSection" with your actual contact section element ID
            if ($w("#contactSection")) {
                $w("#contactSection").scrollTo()
                    .then(() => {
                        console.log("Scrolled to contact section");
                    })
                    .catch((error) => {
                        console.error("Error scrolling to contact:", error);
                    });
            }
        }
    });
    
    console.log('Iframe scroll handler initialized');
});


/**
 * SETUP CHECKLIST:
 * 
 * □ Add HTML iframe element to your Wix page
 * □ Set iframe source to your full-site.html URL
 * □ Give the HTML iframe element an ID (e.g., "htmlIframe")
 * □ Update line 16 to use your HTML element ID: $w("#yourHtmlElementId")
 * □ Add section elements to your Wix page with IDs
 * □ Copy this code to Page Code in Wix Editor
 * □ Update all section IDs in the if-else statements with your actual element IDs
 * □ Enable Developer Tools in Wix (Settings > Developer Tools)
 * □ Test on iPhone Safari to verify scrolling works
 * 
 * TROUBLESHOOTING:
 * - Check browser console for error messages
 * - Verify element IDs match exactly (case-sensitive)
 * - Make sure the HTML element ID matches the one in $w("#htmlIframe")
 * - Ensure section IDs exist on your Wix page
 * - Test the postMessage by checking console.log messages
 */
