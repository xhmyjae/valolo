/* gotSpike check if the boolean noSpike (didn't take the spike at the spawn) if true, if it is the spike will be visible.
If the spike gets clicked on, it will move the boolean value to false and check the linked objective. */
function gotSpike() {
    if (noSpike == true) {
        document.getElementById("spike").style.visibility = "visible";
        document.getElementById("spike_img").onclick = function () {
            noSpike = false;
            document.getElementById("Aobj").style.textDecoration = "line-through";
            document.getElementById("spike").style.visibility = "hidden";
        }
    }
}

/* onAsite will start when the user gets on A site. If they took the spike it will start the final choice */
function onASite() {
    if (noSpike == false) {
        hideIcons()
        endGameA()
    } else {
        hideShowA_site()
    }
}

/* onBsite will start when the user gets on A site. If they took the spike it will start the final choice */
function onBSite() {
    if (noSpike == false) {
        hideIcons()
        endGameB()
    } else {
        hideShowB_site()
    }
}

/* endGameA will create buttons and allow the user to end the story or continue looking around, in the last case the buttons will be removed */
function endGameA() {
    let siteChoice = document.getElementById("siteChoice");
    for (i = 1; i < 3; i++) {
        let bttn = document.createElement("button");
        bttn.setAttribute("id", i + "btn");
        bttn.setAttribute("class", "bttn");
        siteChoice.appendChild(bttn);
    }
    let Abtn = document.getElementById("1btn");
    let Bbtn = document.getElementById("2btn");
    Abtn.innerHTML = "Plant the spike";
    Bbtn.innerHTML = "Look around";

    document.getElementById("endGame").style.display = "block";
    document.getElementById("1btn").onclick = function () {
        ending()
        document.getElementById("endGame").style.display = "none";
    }
    document.getElementById("2btn").onclick = function () {
        hideShowA_site()
        document.getElementById("endGame").style.display = "none";
        Abtn.remove();
        Bbtn.remove();
    }
}

/* endGameB will create buttons and allow the user to trigger the final scene or keep looking around, in the last case the buttons will be removed */
function endGameB() {
    let siteChoice = document.getElementById("siteChoice");
    for (i = 1; i < 3; i++) {
        let bttn = document.createElement("button");
        bttn.setAttribute("id", i + "btn");
        bttn.setAttribute("class", "bttn");
        siteChoice.appendChild(bttn);
    }
    let Abtn = document.getElementById("1btn");
    let Bbtn = document.getElementById("2btn");
    Abtn.innerHTML = "Plant the spike";
    Bbtn.innerHTML = "Look around";

    document.getElementById("endGame").style.display = "block";
    document.getElementById("1btn").onclick = function () {
        ending()
        document.getElementById("endGame").style.display = "none";
    }
    document.getElementById("2btn").onclick = function () {
        hideShowB_site()
        document.getElementById("endGame").style.display = "none";
        Abtn.remove();
        Bbtn.remove();
    }
}

/* ending will show the bubble and choices, the last choice will redirect to the menu page */
function ending() {
    document.getElementById("Bobj").style.textDecoration = "line-through";
    let bubble = document.getElementById("bubble");
    document.getElementById("posAv").style.visibility = "visible";
    document.getElementById("posCharacter").style.visibility = "visible";
    document.getElementById("posScene").style.visibility = "visible";
    document.getElementById("bubble").style.visibility = "visible";

    document.getElementById("Gbubble").style.display = "block";
    document.getElementById("Gchoice").style.display = "inline";

    document.getElementById("Ibtn").onclick = function () {
        hideChoices()
        document.getElementById("Hchoice").style.display = "inline";
        document.getElementById("Hbubble").style.display = "block";
    }

    document.getElementById("Jbtn").onclick = function () {
        hideChoices()
        location.href = "../index.html";
    }
}
