function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'path/to/your-cv.pdf'; // Replace with your CV file path
    link.download = 'Vinit_CV.pdf';
    link.click();
}
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