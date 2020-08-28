export const getRandom = () => Math.round(255 * Math.random());

const myBlocks = document.querySelector(".blocks-wrapper");

const showBlocks = (selector) => selector.classList.toggle("hidden");

const allBlocks = document.querySelectorAll(".block");

const changeColor = (selector) => {
    selector.forEach(
        (item) =>
            (item.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`)
    );
};

const startButton = document.getElementById("start-btn");

const start = () => {
    changeColor(allBlocks);
    showBlocks(myBlocks);
    myBlocks.classList.contains("hidden")
        ? (startButton.innerHTML = "Show blocks")
        : (startButton.innerHTML = "Hide blocks");
};

const changeButton = document.getElementById("change-btn");

let interval;
let switcher = false;

const changer = () => {
    if (switcher) {
        clearInterval(interval);
        switcher = false;
        changeButton.innerHTML = "Start color changer";
    } else {
        interval = setInterval(() => changeColor(allBlocks), 1000);
        switcher = true;
        changeButton.innerHTML = "Stop color changer";
    }
};
