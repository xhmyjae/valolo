/* all the hideShow functions allow to show the icons for a specific scene. Each places got their own positioning */
function hideShowA_firstentry() {
    hideIcons()
    document.getElementById("icon_top_mid").style.visibility = "visible";
    document.getElementById("icon_top_mid").style.left = "35%";
    document.getElementById("icon_top_mid").style.top = "45%";
    document.getElementById("icon_A_lobby").style.visibility = "visible";
    document.getElementById("icon_A_lobby").style.left = "58%";
    document.getElementById("icon_A_lobby").style.top = "45%";
    document.getElementById("icon_spawn").style.visibility = "visible";
    document.getElementById("icon_spawn").style.left = "48%";
    document.getElementById("icon_spawn").style.top = "70%";
    document.getElementById("name").innerHTML = "A FIRST ENTRY";
}

function hideShowA_link() {
    hideIcons()
    document.getElementById("icon_garden").style.visibility = "visible";
    document.getElementById("icon_garden").style.left = "25%";
    document.getElementById("icon_garden").style.top = "45%";
    document.getElementById("icon_A_site").style.visibility = "visible";
    document.getElementById("icon_A_site").style.left = "65%";
    document.getElementById("icon_A_site").style.top = "45%";
    document.getElementById("icon_catwalk").style.visibility = "visible";
    document.getElementById("icon_catwalk").style.left = "55%";
    document.getElementById("icon_catwalk").style.top = "80%";
    document.getElementById("name").innerHTML = "A LINK";
}

function hideShowA_lobby() {
    hideIcons()
    document.getElementById("icon_A_firstentry").style.visibility = "visible";
    document.getElementById("icon_A_firstentry").style.left = "55%";
    document.getElementById("icon_A_firstentry").style.top = "80%";
    document.getElementById("icon_A_long").style.visibility = "visible";
    document.getElementById("icon_A_long").style.left = "45%";
    document.getElementById("icon_A_long").style.top = "50%";
    document.getElementById("name").innerHTML = "A LOBBY";
}

function hideShowA_long() {
    hideIcons()
    document.getElementById("icon_A_lobby").style.visibility = "visible";
    document.getElementById("icon_A_lobby").style.left = "50%";
    document.getElementById("icon_A_lobby").style.top = "80%";
    document.getElementById("icon_A_site").style.visibility = "visible";
    document.getElementById("icon_A_site").style.left = "45%";
    document.getElementById("icon_A_site").style.top = "50%";
    document.getElementById("name").innerHTML = "A LONG";
}

function hideShowA_site() {
    hideIcons()
    document.getElementById("icon_heaven").style.visibility = "visible";
    document.getElementById("icon_heaven").style.left = "35%";
    document.getElementById("icon_heaven").style.top = "25%";
    document.getElementById("icon_A_link").style.visibility = "visible";
    document.getElementById("icon_A_link").style.left = "20%";
    document.getElementById("icon_A_link").style.top = "75%";
    document.getElementById("icon_A_long").style.visibility = "visible";
    document.getElementById("icon_A_long").style.left = "85%";
    document.getElementById("icon_A_long").style.top = "75%";
    document.getElementById("name").innerHTML = "A SITE";
}

function hideShowB_link() {
    hideIcons()
    document.getElementById("icon_B_lobby").style.visibility = "visible";
    document.getElementById("icon_B_lobby").style.left = "15%";
    document.getElementById("icon_B_lobby").style.top = "85%";
    document.getElementById("icon_mid").style.visibility = "visible";
    document.getElementById("icon_mid").style.left = "50%";
    document.getElementById("icon_mid").style.top = "55%";
    document.getElementById("name").innerHTML = "B LINK";
}

function hideShowB_lobby() {
    hideIcons()
    document.getElementById("icon_tunnels").style.visibility = "visible";
    document.getElementById("icon_tunnels").style.left = "20%";
    document.getElementById("icon_tunnels").style.top = "50%";
    document.getElementById("icon_B_link").style.visibility = "visible";
    document.getElementById("icon_B_link").style.left = "60%";
    document.getElementById("icon_B_link").style.top = "50%";
    document.getElementById("icon_spawn").style.visibility = "visible";
    document.getElementById("icon_spawn").style.left = "80%";
    document.getElementById("icon_spawn").style.top = "70%";
    document.getElementById("name").innerHTML = "B LOBBY";
}

function hideShowB_site() {
    hideIcons()
    document.getElementById("icon_tunnels").style.visibility = "visible";
    document.getElementById("icon_tunnels").style.left = "50%";
    document.getElementById("icon_tunnels").style.top = "80%";
    document.getElementById("icon_market").style.visibility = "visible";
    document.getElementById("icon_market").style.left = "70%";
    document.getElementById("icon_market").style.top = "30%";
    document.getElementById("name").innerHTML = "B SITE";
}

function hideShowbottom_mid() {
    hideIcons()
    document.getElementById("icon_market").style.visibility = "visible";
    document.getElementById("icon_market").style.left = "39%";
    document.getElementById("icon_market").style.top = "50%";
    document.getElementById("icon_pizza").style.visibility = "visible";
    document.getElementById("icon_pizza").style.left = "58%";
    document.getElementById("icon_pizza").style.top = "50%";
    document.getElementById("icon_mid").style.visibility = "visible";
    document.getElementById("icon_mid").style.left = "50%";
    document.getElementById("icon_mid").style.top = "80%";
    document.getElementById("name").innerHTML = "BOTTOM MID";
}

function hideShowcatwalk() {
    hideIcons()
    document.getElementById("icon_A_link").style.visibility = "visible";
    document.getElementById("icon_A_link").style.left = "50%";
    document.getElementById("icon_A_link").style.top = "50%";
    document.getElementById("icon_top_mid").style.visibility = "visible";
    document.getElementById("icon_top_mid").style.left = "40%";
    document.getElementById("icon_top_mid").style.top = "80%";
    document.getElementById("name").innerHTML = "CATWALK";
}

function hideShowgarden() {
    hideIcons()
    document.getElementById("icon_A_link").style.visibility = "visible";
    document.getElementById("icon_A_link").style.left = "55%";
    document.getElementById("icon_A_link").style.top = "80%";
    document.getElementById("icon_heaven").style.visibility = "visible";
    document.getElementById("icon_heaven").style.left = "47%";
    document.getElementById("icon_heaven").style.top = "45%";
    document.getElementById("name").innerHTML = "GARDEN";
}

function hideShowheaven() {
    hideIcons()
    document.getElementById("icon_A_site").style.visibility = "visible";
    document.getElementById("icon_A_site").style.left = "48%";
    document.getElementById("icon_A_site").style.top = "50%";
    document.getElementById("icon_garden").style.visibility = "visible";
    document.getElementById("icon_garden").style.left = "50%";
    document.getElementById("icon_garden").style.top = "80%";
    document.getElementById("name").innerHTML = "HEAVEN";
}

function hideShowmarket() {
    hideIcons()
    document.getElementById("icon_bottom_mid").style.visibility = "visible";
    document.getElementById("icon_bottom_mid").style.left = "50%";
    document.getElementById("icon_bottom_mid").style.top = "80%";
    document.getElementById("icon_B_site").style.visibility = "visible";
    document.getElementById("icon_B_site").style.left = "50%";
    document.getElementById("icon_B_site").style.top = "50%";
    document.getElementById("name").innerHTML = "MARKET";
}

function hideShowmid() {
    hideIcons()
    document.getElementById("icon_bottom_mid").style.visibility = "visible";
    document.getElementById("icon_bottom_mid").style.left = "60%";
    document.getElementById("icon_bottom_mid").style.top = "50%";
    document.getElementById("icon_B_link").style.visibility = "visible";
    document.getElementById("icon_B_link").style.left = "10%";
    document.getElementById("icon_B_link").style.top = "55%";
    document.getElementById("name").innerHTML = "MID";
}

function hideShowpizza() {
    hideIcons()
    document.getElementById("icon_bottom_mid").style.visibility = "visible";
    document.getElementById("icon_bottom_mid").style.left = "50%";
    document.getElementById("icon_bottom_mid").style.top = "80%";
    document.getElementById("name").innerHTML = "PIZZA";
}

function hideShowspawn() {
    hideIcons()
    document.getElementById("icon_A_firstentry").style.visibility = "visible";
    document.getElementById("icon_A_firstentry").style.left = "76%";
    document.getElementById("icon_A_firstentry").style.top = "45%";
    document.getElementById("icon_B_lobby").style.visibility = "visible";
    document.getElementById("icon_B_lobby").style.left = "13%";
    document.getElementById("icon_B_lobby").style.top = "50%";
    document.getElementById("name").innerHTML = "SPAWN";
}

function hideShowtop_mid() {
    hideIcons()
    document.getElementById("icon_catwalk").style.visibility = "visible";
    document.getElementById("icon_catwalk").style.left = "63%";
    document.getElementById("icon_catwalk").style.top = "48%";
    document.getElementById("icon_A_firstentry").style.visibility = "visible";
    document.getElementById("icon_A_firstentry").style.left = "80%";
    document.getElementById("icon_A_firstentry").style.top = "75%";
    document.getElementById("icon_mid").style.visibility = "visible";
    document.getElementById("icon_mid").style.left = "45%";
    document.getElementById("icon_mid").style.top = "55%";
    document.getElementById("name").innerHTML = "TOP MID";
}

function hideShowtunnels() {
    hideIcons()
    document.getElementById("icon_B_lobby").style.visibility = "visible";
    document.getElementById("icon_B_lobby").style.left = "80%";
    document.getElementById("icon_B_lobby").style.top = "75%";
    document.getElementById("icon_B_site").style.visibility = "visible";
    document.getElementById("icon_B_site").style.left = "50%";
    document.getElementById("icon_B_site").style.top = "50%";
    document.getElementById("name").innerHTML = "TUNNELS";
}


/* hideIcons hides all the icons and hide the spike too */
function hideIcons() {
    document.getElementById("icon_A_firstentry").style.visibility = "hidden";
    document.getElementById("icon_A_link").style.visibility = "hidden";
    document.getElementById("icon_A_lobby").style.visibility = "hidden";
    document.getElementById("icon_A_long").style.visibility = "hidden";
    document.getElementById("icon_A_site").style.visibility = "hidden";
    document.getElementById("icon_B_link").style.visibility = "hidden";
    document.getElementById("icon_B_lobby").style.visibility = "hidden";
    document.getElementById("icon_B_site").style.visibility = "hidden";
    document.getElementById("icon_bottom_mid").style.visibility = "hidden";
    document.getElementById("icon_catwalk").style.visibility = "hidden";
    document.getElementById("icon_garden").style.visibility = "hidden";
    document.getElementById("icon_heaven").style.visibility = "hidden";
    document.getElementById("icon_market").style.visibility = "hidden";
    document.getElementById("icon_mid").style.visibility = "hidden";
    document.getElementById("icon_pizza").style.visibility = "hidden";
    document.getElementById("icon_spawn").style.visibility = "hidden";
    document.getElementById("icon_top_mid").style.visibility = "hidden";
    document.getElementById("icon_tunnels").style.visibility = "hidden";
    document.getElementById("spike").style.visibility = "hidden";
}

/* hideChoices hide all the choices and their bubble */
function hideChoices() {
    document.getElementById("Achoice").style.display = "none";
    document.getElementById("Abubble").style.display = "none";
    document.getElementById("Bchoice").style.display = "none";
    document.getElementById("Bbubble").style.display = "none";
    document.getElementById("Cchoice").style.display = "none";
    document.getElementById("Cbubble").style.display = "none";
    document.getElementById("Dchoice").style.display = "none";
    document.getElementById("Dbubble").style.display = "none";
    document.getElementById("Echoice").style.display = "none";
    document.getElementById("Ebubble").style.display = "none";
    document.getElementById("Fchoice").style.display = "none";
    document.getElementById("Fbubble").style.display = "none";
    document.getElementById("Gchoice").style.display = "none";
    document.getElementById("Gbubble").style.display = "none";
    document.getElementById("Hchoice").style.display = "none";
    document.getElementById("Hbubble").style.display = "none";
}