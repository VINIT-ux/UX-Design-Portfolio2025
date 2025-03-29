// Include HTML Functionality
    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                        if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                        elmnt.removeAttribute("w3-include-html");
                        includeHTML();
                    }
                };
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }
    includeHTML();

    // Custom Cursor Functionality
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const cursorTrail = document.createElement("div");
    cursorTrail.classList.add("cursor-trail");
    document.body.appendChild(cursorTrail);

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorTrail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the button with the class 'cv'
    const cvButton = document.querySelector('.cv');
    
    // Add a click event listener to the button
    cvButton.addEventListener('click', () => {
        // Create a temporary anchor element for the download
        const downloadLink = document.createElement('a');
        
        // Set the file path and filename
        downloadLink.href = 'cv/VINIT_CV_DESIGNER.pdf';
        downloadLink.download = 'M N VINIT_Product Designer.pdf'; // Set the desired file name
        
        // Append the anchor to the body, click it to start the download, and remove it
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});
    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', () => {
        // Select the button with the class 'cv'
        const cvButton = document.querySelector('.cv_footer');
        
        // Add a click event listener to the button
        cvButton.addEventListener('click', () => {
            // Create a temporary anchor element for the download
            const downloadLink = document.createElement('a');
            
            downloadLink.href = 'cv/VINIT_CV_DESIGNER.pdf'; // Correct the folder name
            downloadLink.download = 'M N VINIT_Product Designer.pdf'; // Set the desired file name
            
            // Append the anchor to the body, click it to start the download, and remove it
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
    