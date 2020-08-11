const getRandom = () => Math.round((255 - 0) * Math.random() + 0);

const showBlocks = () =>
    document.querySelector(".blocks-wrapper").classList.toggle("hidden");

const changeColor = () => {
    document
        .querySelectorAll(".block")
        .forEach(
            (item) =>
                (item.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`)
        );
};

const start = () => {
    changeColor();
    showBlocks();
    document.querySelector(".blocks-wrapper").classList.contains("hidden")
        ? (document.getElementById("start-btn").innerHTML = "Show blocks")
        : (document.getElementById("start-btn").innerHTML = "Hide blocks");
};

let interval;
let switcher = false;

const changer = () => {
    if (switcher) {
        clearInterval(interval);
        switcher = false;
        document.getElementById("change-btn").innerHTML = "Start color changer";
    } else {
        interval = setInterval(() => changeColor(), 1000);
        switcher = true;
        document.getElementById("change-btn").innerHTML = "Stop color changer";
    }
};
