function gotSpike() {
    if (noSpike == true) {
        document.getElementById("spike").style.visibility = "visible";
        document.getElementById("spike_img").onclick = function() {
            noSpike = false;
            document.getElementById("Aobj").style.textDecoration = "line-through";
            document.getElementById("spike").style.visibility = "hidden";
        }
    }
}

function onASite() {
    if (noSpike == false) {
        hideIcons()
        endGameA()
    } else {
        hideShowA_site()
    }
}

function onBSite() {
    if (noSpike == false) {
        hideIcons()
        endGameB()
    } else {
        hideShowB_site()
    }
}

function endGameA() {
    let siteChoice = document.getElementById("siteChoice");
    for (i=1; i<3; i++) {
        let bttn = document.createElement("button");
        bttn.setAttribute("id", i+"btn");
        bttn.setAttribute("class", "bttn");
        siteChoice.appendChild(bttn);
    }
    let Abtn = document.getElementById("1btn");
    let Bbtn = document.getElementById("2btn");
    Abtn.innerHTML = "Plant the spike";
    Bbtn.innerHTML = "Look around";

    document.getElementById("endGame").style.display = "block";
    document.getElementById("1btn").onclick = function() {
        ending()
        document.getElementById("endGame").style.display = "none";
    }
    document.getElementById("2btn").onclick = function() {
        hideShowA_site()
        document.getElementById("endGame").style.display = "none";
        Abtn.remove();
        Bbtn.remove();
    }
}

function endGameB() {
    let siteChoice = document.getElementById("siteChoice");
    for (i=1; i<3; i++) {
        let bttn = document.createElement("button");
        bttn.setAttribute("id", i+"btn");
        bttn.setAttribute("class", "bttn");
        siteChoice.appendChild(bttn);
    }
    let Abtn = document.getElementById("1btn");
    let Bbtn = document.getElementById("2btn");
    Abtn.innerHTML = "Plant the spike";
    Bbtn.innerHTML = "Look around";

    document.getElementById("endGame").style.display = "block";
    document.getElementById("1btn").onclick = function() {
        ending()
        document.getElementById("endGame").style.display = "none";
    }
    document.getElementById("2btn").onclick = function() {
        hideShowB_site()
        document.getElementById("endGame").style.display = "none";
        Abtn.remove();
        Bbtn.remove();
    }
}

function ending() {
    document.getElementById("Bobj").style.textDecoration = "line-through";
    let bubble = document.getElementById("bubble");
    document.getElementById("posAv").style.visibility = "visible";
    document.getElementById("posCharacter").style.visibility = "visible";
    document.getElementById("posScene").style.visibility = "visible";
    document.getElementById("bubble").style.visibility = "visible";

    document.getElementById("Gbubble").style.display = "block";
    document.getElementById("Gchoice").style.display = "inline";

    document.getElementById("Ibtn").onclick = function() {
        hideChoices()
        document.getElementById("Hchoice").style.display = "inline";
        document.getElementById("Hbubble").style.display = "block";
    }

    document.getElementById("Jbtn").onclick = function() {
        hideChoices()
        location.href = "../index.html";
    }
}
