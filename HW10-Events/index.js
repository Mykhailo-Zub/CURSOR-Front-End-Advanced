const aBtn = document.getElementById("A");
const sBtn = document.getElementById("S");
const dBtn = document.getElementById("D");
const fBtn = document.getElementById("F");
const gBtn = document.getElementById("G");
const hBtn = document.getElementById("H");
const jBtn = document.getElementById("J");
const kBtn = document.getElementById("K");
const lBtn = document.getElementById("L");
const sound65 = new Audio("./sounds/1 (1).mp3");
const sound83 = new Audio("./sounds/1 (2).mp3");
const sound68 = new Audio("./sounds/1 (3).mp3");
const sound70 = new Audio("./sounds/1 (4).wav");
const sound71 = new Audio("./sounds/1 (5).wav");
const sound72 = new Audio("./sounds/1 (6).mp3");
const sound74 = new Audio("./sounds/1 (7).mp3");
const sound75 = new Audio("./sounds/1 (8).mp3");
const sound76 = new Audio("./sounds/1 (9).mp3");

function addWhite(btn) {
    btn.classList.add("white-pressed");
    setTimeout(() => btn.classList.remove("white-pressed"), 300);
}

function addBlack(btn) {
    btn.classList.add("black-pressed");
    setTimeout(() => btn.classList.remove("black-pressed"), 300);
}

aBtn.addEventListener("click", function (event) {
    playSound(sound65);
});

sBtn.addEventListener("click", function (event) {
    playSound(sound83);
});

dBtn.addEventListener("click", function (event) {
    playSound(sound68);
});

fBtn.addEventListener("click", function (event) {
    playSound(sound70);
});

gBtn.addEventListener("click", function (event) {
    playSound(sound71);
});

hBtn.addEventListener("click", function (event) {
    playSound(sound72);
});

jBtn.addEventListener("click", function (event) {
    playSound(sound74);
});

kBtn.addEventListener("click", function (event) {
    playSound(sound75);
});

lBtn.addEventListener("click", function (event) {
    playSound(sound76);
});

document.body.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 65:
            addWhite(aBtn);
            playSound(sound65);
            break;
        case 83:
            addBlack(sBtn);
            playSound(sound83);
            break;
        case 68:
            addWhite(dBtn);
            playSound(sound68);
            break;
        case 70:
            addBlack(fBtn);
            playSound(sound70);
            break;
        case 71:
            addWhite(gBtn);
            playSound(sound71);
            break;
        case 72:
            addBlack(hBtn);
            playSound(sound72);
            break;
        case 74:
            addWhite(jBtn);
            playSound(sound74);
            break;
        case 75:
            addBlack(kBtn);
            playSound(sound75);
            break;
        case 76:
            addWhite(lBtn);
            playSound(sound76);
            break;
    }
});

function playSound(sound) {
    sound.play();
}
