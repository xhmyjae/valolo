/* music create the audio track and allow the user to put or no the music by clicking on the icons. By default, the music is off */
function music() {
    var audio = document.createElement('audio');
    audio.setAttribute('src', '../music/valoTheme.mp3');
    let sideMusic = document.getElementById("musicIcons");
    sideMusic.appendChild(audio);

    document.getElementById("musicOff").onclick = function () {
        document.getElementById("musicOn").style.visibility = "visible";
        document.getElementById("musicOff").style.visibility = "hidden";
        audio.volume = 0.2;
        audio.play();
    }
    document.getElementById("musicOn").onclick = function () {
        document.getElementById("musicOff").style.visibility = "visible";
        document.getElementById("musicOn").style.visibility = "hidden";
        audio.pause();
        audio.currentTime = 0;
    }
}
