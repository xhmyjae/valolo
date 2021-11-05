window.addEventListener('DOMContentLoaded', init);


function init() {
    if (enemies.length != 0) {
        let rand = getRandomInt(2);
        if (rand == 1) {
            let chara = getRandomInt(enemies.length);
            setTimeout(fightEnemy(chara), 5000)
        }
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let enemies = ["jett", "phoenix", "reyna", "raze", "yoru"]


function fightEnemy(chara) {
    enemyPick(chara)
    var elem = document.getElementById("enemy");
    elem.addEventListener('click', fightEnemy(chara));
    if (elem.click) {
        enemyDeath(chara)
    } else {
        playerDeath()
    }
}

function enemyDeath(chara) {
    var elem = document.getElementById("enemy");
    elem.parentNode.removeChild(elem);
    const index = enemies.indexOf(chara);
    enemies.splice(index, 1);
}

function playerDeath() {
    if (window.confirm("Wanna try again?")) {
        window.location.href = "../main.html";
    }

}

function enemyPick(ind) {
    var img = document.createElement('img');
    if (enemies[ind] == "jett") {
        img.src = "../images/jett.png";
        img.alt = "jett";
    } else if (enemies[ind] == "phoenix") {
        img.src = "../images/phoenix.png";
        img.alt = "phoenix";
    } else if (enemies[ind] == "reyna") {
        img.src = "../images/reyna.png";
        img.alt = "reyna";
    } else if (enemies[ind] == "raze") {
        img.src = "../images/raze.png";
        img.alt = "raze";
    } else {
        img.src = "../images/yoru.png";
        img.alt = "yoru";
    }
    img.id = "enemy";
    document.getElementById('enemyEmp').appendChild(img);
}

/* const index = enemies.indexOf(5);
if (index > -1) {
    enemies.splice(index, 1);
} */
