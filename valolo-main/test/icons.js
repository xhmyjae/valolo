function makeIcons() {
    let allIcons = document.getElementById("allIcons");
    for (i=0; i<iconsData.length; i++) {
        let cas = document.createElement("div");
        cas.setAttribute("class", iconsData[i][cas]);
        allIcons.appendChild(cas);

        let image = document.createElement("img");
        image.src = "../images/poulet.png";
        image.alt = "poulet";
        image.setAttribute("class", "icons");
        image.setAttribute("id", iconsData[i][id]);
        cas.appendChild(image);

        let descri = document.createElement("p");
        descri.setAttribute("class", "descri");
        descri.innerHTML = iconsData[i][descri];
        cas.appendChild(descri);
    }
}

window.addEventListener('DOMContentLoaded', makeIcons);