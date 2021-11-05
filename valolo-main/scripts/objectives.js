function obj() {
    if (objDisplay == true) {
        document.getElementById("objIcon").onclick = function() {
            document.getElementById("objBox").style.visibility = "hidden";
            audio.volume = 0.2;
            audio.play();
            objDisplay = false;
        }
    } else {
        document.getElementById("objIcon").onclick = function() {
            document.getElementById("objBox").style.visibility = "visible";
            audio.volume = 0.2;
            audio.play();
            objDisplay = true;
        }
    }
}