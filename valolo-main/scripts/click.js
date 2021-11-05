var noSpike = true;

window.onload = function() {

    music()

    document.getElementById("Abtn").onclick = function() {
        hideChoices()
        document.getElementById("Bchoice").style.display = "inline";
        document.getElementById("Bbubble").style.display = "block";
    }
    document.getElementById("Bbtn").onclick = function() {
        hideChoices()
        document.getElementById("Cchoice").style.display = "inline";
        document.getElementById("Cbubble").style.display = "block";
    }
    document.getElementById("Cbtn").onclick = function() {
        hideChoices()
        document.getElementById("Dchoice").style.display = "inline";
        document.getElementById("Dbubble").style.display = "block";
    }
    document.getElementById("Dbtn").onclick = function() {
        hideChoices()
        document.getElementById("Fchoice").style.display = "inline";
        document.getElementById("Fbubble").style.display = "block";
    }
    document.getElementById("Ebtn").onclick = function() {
        hideChoices()
        document.getElementById("Echoice").style.display = "inline";
        document.getElementById("Ebubble").style.display = "block";
    }
    document.getElementById("Fbtn").onclick = function() {
        hideChoices()
        document.getElementById("Dchoice").style.display = "inline";
        document.getElementById("Dbubble").style.display = "block";
    }
    document.getElementById("Gbtn").onclick = function() {
        hideChoices()
        document.getElementById("Fchoice").style.display = "inline";
        document.getElementById("Fbubble").style.display = "block";
    }
    document.getElementById("Hbtn").onclick = function() {
        hideChoices()
        document.getElementById("posAv").style.visibility = "hidden";
        document.getElementById("posCharacter").style.visibility = "hidden";
        document.getElementById("posScene").style.visibility = "hidden";
        document.getElementById("bubble").style.visibility = "hidden";
        document.getElementById("objList").style.display = "block";
        hideShowspawn()

        document.getElementById("spike").style.visibility = "visible";
        gotSpike()
    }

    document.getElementById("icon_A_firstentry").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/A_firstentry.png)";
        hideShowA_firstentry()
    };
    document.getElementById("icon_A_link").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/A_link.png)";
        hideShowA_link()
    };
    document.getElementById("icon_A_lobby").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/A_lobby.png)";
        hideShowA_lobby()
    };
    document.getElementById("icon_A_long").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/A_long.png)";
        hideShowA_long()
    };
    document.getElementById("icon_A_site").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/A_site.png)";
        onASite()
    };
    document.getElementById("icon_B_link").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/B_link.png)";
        hideShowB_link()
    };
    document.getElementById("icon_B_lobby").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/B_lobby.png)";
        hideShowB_lobby()
    };
    document.getElementById("icon_B_site").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/B_site.png)";
        onBSite()
    };
    document.getElementById("icon_bottom_mid").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/bottom_mid.png)";
        hideShowbottom_mid()
    };
    document.getElementById("icon_catwalk").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/catwalk.png)";
        hideShowcatwalk()
    };
    document.getElementById("icon_garden").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/garden.png)";
        hideShowgarden()
    };
    document.getElementById("icon_heaven").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/heaven.png)";
        hideShowheaven()
    };
    document.getElementById("icon_market").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/market.png)";
        hideShowmarket()
    };
    document.getElementById("icon_mid").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/mid.png)";
        hideShowmid()
    };
    document.getElementById("icon_pizza").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/pizza.png)";
        hideShowpizza()
    };
    document.getElementById("icon_spawn").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/spawn.png)";
        hideShowspawn()
        gotSpike()
    };
    document.getElementById("icon_top_mid").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/top_mid.png)";
        hideShowtop_mid()
    };
    document.getElementById("icon_tunnels").onclick = function() {
        document.getElementById("base").style.backgroundImage = "url(../images/tunnels.png)";
        hideShowtunnels()
    };
};
