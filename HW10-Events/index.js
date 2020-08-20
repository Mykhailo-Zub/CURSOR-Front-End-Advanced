function addWhite(btn) {
    btn.classList.add("white-pressed");
    setTimeout(() => btn.classList.remove("white-pressed"), 300);
}

function addBlack(btn) {
    btn.classList.add("black-pressed");
    setTimeout(() => btn.classList.remove("black-pressed"), 300);
}

function playSound(sound) {
    sound.play();
}

const whiteButtonsForMouse = document.querySelectorAll(".white-btn");
const blackButtonsForMouse = document.querySelectorAll(".black-btn");

whiteButtonsForMouse.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        addWhite(elem);
        playSound(new Audio(`sound/1(${index}).mp3`));
    });
});

blackButtonsForMouse.forEach((elem, index) => {
    elem.addEventListener("click", () => {
        addBlack(elem);
        playSound(new Audio(`sound/1(${index + 5}).mp3`));
    });
});

const whiteButtonsForKeyboard = whiteButtonsForMouse.forEach((elem, index) => {
    elem.classList.add(`white${index}`);
});
const blackButtonsForKeyboard = blackButtonsForMouse.forEach((elem, index) => {
    elem.classList.add(`black${index}`);
});

document.body.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 65:
            addWhite(document.querySelector(".white0"));
            playSound(new Audio(`sound/1(0).mp3`));
            break;
        case 83:
            addBlack(document.querySelector(".black0"));
            playSound(new Audio(`sound/1(5).mp3`));
            break;
        case 68:
            addWhite(document.querySelector(".white1"));
            playSound(new Audio(`sound/1(1).mp3`));
            break;
        case 70:
            addBlack(document.querySelector(".black1"));
            playSound(new Audio(`sound/1(6).mp3`));
            break;
        case 71:
            addWhite(document.querySelector(".white2"));
            playSound(new Audio(`sound/1(2).mp3`));
            break;
        case 72:
            addBlack(document.querySelector(".black2"));
            playSound(new Audio(`sound/1(7).mp3`));
            break;
        case 74:
            addWhite(document.querySelector(".white3"));
            playSound(new Audio(`sound/1(3).mp3`));
            break;
        case 75:
            addBlack(document.querySelector(".black3"));
            playSound(new Audio(`sound/1(8).mp3`));
            break;
        case 76:
            addWhite(document.querySelector(".white4"));
            playSound(new Audio(`sound/1(4).mp3`));
            break;
    }
});
