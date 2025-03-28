/**
 * Asynchronously includes external HTML files into elements with the attribute 'w3-include-html'.
 * 
 * This function looks for all elements with the attribute `w3-include-html` and fetches the content from the 
 * specified file. If the file is successfully fetched, the content is inserted into the element. 
 * If the file cannot be found, a 'Page not found' message is inserted instead.
 * 
 * @async
 * @returns {Promise<void>} A promise that resolves when the HTML files are successfully included or if there is an error.
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');

    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/**
 * Toggles the visibility of the footer menu on responsive devices.
 * 
 * This function checks for an element with the ID 'responsiveFooter' and toggles the 'd-none' class 
 * to show or hide the footer menu when triggered. This is commonly used for responsive web design to 
 * show/hide the footer menu on mobile or tablet devices.
 */
function toggleFooterMenu() {
    const respFooterRef = document.getElementById('responsiveFooter');

    respFooterRef.classList.toggle('d-none');
}