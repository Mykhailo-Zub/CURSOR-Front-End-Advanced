const waitTime = 50;

// Костыли №1

function getRandomChines(length) {
    return new Promise((resolve) => {
        let answer = "";
        let i = 0;
        let numberForChar = parseInt(Date.now().toString().slice(-5));
        while (i < length) {
            numberForChar += waitTime;
            answer += String.fromCharCode(numberForChar);
            i++;
        }
        setTimeout(
            () =>
                resolve(
                    (document.querySelector(
                        ".answer1"
                    ).innerHTML = `Result #1: ${answer}`)
                ),
            length * waitTime
        );
    });
}

getRandomChines(4);

// Костыли №2

function getRandomChar() {
    let randomChar = "";
    return (randomChar += String.fromCharCode(Date.now().toString().slice(-5)));
}

function getRandomChines1(length) {
    let answer = [];
    return new Promise((resolve) => {
        const timerId = setInterval(() => {
            if (answer.length < length) {
                setTimeout(() => {
                    answer.push(getRandomChar());
                }, waitTime);
            } else clearInterval(timerId);
            resolve(
                (document.querySelector(
                    ".answer2"
                ).innerHTML = `Result #2: ${answer.slice(0, length).join("")}`)
            );
        }, 1);
    });
}

getRandomChines1(4);
