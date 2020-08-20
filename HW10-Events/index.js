function addWhite(btn) {
    btn.classList.add("white-pressed");
    setTimeout(() => btn.classList.remove("white-pressed"), 300);
}

function addBlack(btn) {
    btn.classList.add("black-pressed");
    setTimeout(() => btn.classList.remove("black-pressed"), 300);
}

function playSoundAndPress(link) {
    const sound = new Audio(`sound/1(${link}).mp3`);
    sound.play();
    link < 5
        ? addWhite(document.querySelector(`.btn${link}`))
        : addBlack(document.querySelector(`.btn${link}`));
}

const ButtonsForMouse = document.querySelectorAll(".btn");

ButtonsForMouse.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        playSoundAndPress(index);
    });
});

const ButtonsForKeyboard = ButtonsForMouse.forEach((elem, index) => {
    elem.classList.add(`btn${index}`);
});

document.body.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 65:
            playSoundAndPress(0);
            break;
        case 83:
            playSoundAndPress(5);
            break;
        case 68:
            playSoundAndPress(1);
            break;
        case 70:
            playSoundAndPress(6);
            break;
        case 71:
            playSoundAndPress(2);
            break;
        case 72:
            playSoundAndPress(7);
            break;
        case 74:
            playSoundAndPress(3);
            break;
        case 75:
            playSoundAndPress(8);
            break;
        case 76:
            playSoundAndPress(4);
            break;
    }
});
