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