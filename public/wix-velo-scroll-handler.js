/**
 * Wix Velo Code for Handling Iframe PostMessage Scrolling
 * 
 * INSTRUCTIONS:
 * 1. Go to your Wix page editor
 * 2. Add an HTML iframe element with your full-site.html
 * 3. Add element IDs to your sections: #home, #services, #portfolio, #about, #contact
 * 4. Copy this code to your page code (Page Code panel in Wix Editor)
 * 5. The code will listen for postMessage from the iframe and scroll to the appropriate section
 */

import wixWindow from 'wix-window';

$w.onReady(function () {
    // Listen for messages from iframe
    wixWindow.onMessage((event) => {
        if (event.data && event.data.type === 'scrollToSection') {
            const section = event.data.section;
            
            // Map section names to your Wix element IDs
            // Make sure these IDs match your actual Wix page element IDs
            const sectionMap = {
                'home': '#homeSection',        // Replace with your actual home section ID
                'services': '#servicesSection', // Replace with your actual services section ID
                'portfolio': '#portfolioSection', // Replace with your actual portfolio section ID
                'about': '#aboutSection',      // Replace with your actual about section ID
                'contact': '#contactSection'   // Replace with your actual contact section ID
            };
            
            // Get the target element ID
            const targetId = sectionMap[section];
            
            if (targetId && $w(targetId)) {
                // Scroll to the section with smooth animation
                $w(targetId).scrollTo()
                    .then(() => {
                        console.log(`Scrolled to ${section} section`);
                    })
                    .catch((error) => {
                        console.error(`Error scrolling to ${section}:`, error);
                    });
            } else {
                console.warn(`Section not found: ${section}`);
            }
        }
    });
    
    console.log('Iframe scroll handler initialized');
});


/**
 * ALTERNATIVE SIMPLIFIED VERSION (if you don't have specific section elements):
 * 
 * This version scrolls to top, middle, or bottom based on section
 */

/*
import wixWindow from 'wix-window';

$w.onReady(function () {
    wixWindow.onMessage((event) => {
        if (event.data && event.data.type === 'scrollToSection') {
            const section = event.data.section;
            
            // Define scroll positions for each section (in pixels or percentage)
            const scrollPositions = {
                'home': 0,           // Top of page
                'services': 800,     // Adjust these values
                'portfolio': 1600,   // based on your
                'about': 2400,       // actual page
                'contact': 3200      // layout
            };
            
            const scrollY = scrollPositions[section];
            
            if (scrollY !== undefined) {
                wixWindow.scrollTo(0, scrollY, { 
                    smooth: true 
                });
                console.log(`Scrolled to ${section} at ${scrollY}px`);
            }
        }
    });
});
*/


/**
 * SETUP CHECKLIST:
 * 
 * □ Add HTML iframe element to your Wix page
 * □ Set iframe source to your full-site.html URL
 * □ Add section elements to your Wix page with IDs (#homeSection, etc.)
 * □ Copy this code to Page Code in Wix Editor
 * □ Update the sectionMap object with your actual element IDs
 * □ Enable Developer Tools in Wix (Settings > Developer Tools)
 * □ Test on iPhone Safari to verify scrolling works
 * 
 * TROUBLESHOOTING:
 * - Check browser console for error messages
 * - Verify element IDs match exactly (case-sensitive)
 * - Make sure iframe is properly embedded
 * - Ensure postMessage origin is allowed (using '*' for testing)
 */
