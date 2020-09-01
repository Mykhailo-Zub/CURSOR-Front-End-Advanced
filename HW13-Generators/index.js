let fontSize = 14;
const font = document.querySelector(".font-for-change");

function* createIdGenerator() {
    for (let i = 1; ; i++) yield i;
}

const idGenerator = createIdGenerator();

document.getElementById("id-gen").addEventListener("click", () => {
    const container = document.querySelector(".results");
    let newId = document.createElement("span");
    newId.innerHTML = ` ${idGenerator.next().value};`;
    container.append(newId);
});

function* createFontGenerator(defaultSize) {
    fontSize = defaultSize;
    while (fontSize) {
        let change = yield;
        if (change === "up") {
            fontSize += 2;
        }
        if (change === "down") {
            if (fontSize < 4) {
                fontSize;
            } else {
                fontSize -= 2;
            }
        } else {
            fontSize;
        }
    }
}

const fontGenerator = createFontGenerator(14);

document.getElementById("default").addEventListener("click", () => {
    fontSize = 14;
    font.style.fontSize = `${fontSize}px`;
});

document.getElementById("up").addEventListener("click", () => {
    fontGenerator.next();
    fontGenerator.next("up");
    font.style.fontSize = `${fontSize}px`;
});

document.getElementById("down").addEventListener("click", () => {
    fontGenerator.next();
    fontGenerator.next("down");
    font.style.fontSize = `${fontSize}px`;
});
