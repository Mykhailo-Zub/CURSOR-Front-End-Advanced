const BASE = "https://swapi.dev/api/";
let language = null;
const container = document.querySelector(".results");

function getCharacters() {
    const id = selectedEpisode();
    const config = {
        method: "GET",
        url: BASE + "films/" + id,
        params: {
            format: language,
        },
    };
    return axios(config)
        .then((res) => res.data.characters)
        .then((charLinks) => {
            return Promise.all(
                charLinks.map((el) => {
                    el[4].toLowerCase() === "s"
                        ? el
                        : el.slice(0, 4) + "s" + el.slice(4);
                    return axios.get(el).then((res) => res.data);
                })
            );
        })
        .catch((err) => {
            console.log("Error!", err);
        });
}

function showCharacters(characters) {
    container.innerHTML = "";
    characters.map((el) => {
        if (el.gender === "male") {
            el.gender = '<img class="gender" src="./img/male.png">';
        } else if (el.gender === "female") {
            el.gender = '<img class="gender" src="./img/female.png">';
        } else if (el.gender === "hermaphrodite") {
            el.gender = '<img class="gender" src="./img/herm.png">';
        } else if (el.gender === "n/a" || el.gender === "none") {
            el.gender = '<img class="gender" src="./img/na.png">';
        }
        const charElement = document.createElement("div");
        charElement.className = "char";
        charElement.innerHTML = `
        <p class="name">Name:  <span>${el.name}</span></p>
        <p class="birth">Birthday year:  <span>${el.birth_year}</span></p>
        <p class="gender">Gender:  <span>${el.gender}</span></p>`;
        container.append(charElement);
    });
}

function selectedEpisode() {
    return document.getElementById("episode").value;
}

document.getElementById("char-btn").addEventListener("click", () => {
    document.querySelector(".nav-btns").classList.remove("visible");
    getCharacters().then(showCharacters);
});

let page = 1;

function getPlanets(page) {
    const config = {
        method: "GET",
        url: BASE + "planets/",
        params: {
            page,
        },
    };
    return axios(config).then((res) => res.data.results);
}

function showPlanet(planets) {
    container.innerHTML = "";
    planets.forEach((elem) => {
        const planetElement = document.createElement("div");
        planetElement.className = "planet";
        planetElement.innerHTML = `
        <p class="name">Planet name:  <span>${elem.name}</span></p>
        <p class="birth">Population:  <span>${elem.population} souls</span></p>
        <p class="gender">Diameter:  <span>${elem.diameter} meters</span></p>`;
        container.append(planetElement);
    });
}

document.getElementById("planets-btn").addEventListener("click", () => {
    document.querySelector(".nav-btns").classList.add("visible");
    getPlanets(1).then(showPlanet);
});

document.getElementById("prev-btn").addEventListener("click", () => {
    if (page <= 1) return;
    getPlanets(--page).then(showPlanet);
});
document.getElementById("next-btn").addEventListener("click", () => {
    if (page >= 6) return;
    getPlanets(++page).then(showPlanet);
});

// document.getElementById("lang-change").addEventListener("click", () => {
//     if (language) {
//         language = null;
//         console.log(language);
//         // alert("Please reload page");
//     } else {
//         language = "wookiee";
//         console.log(language);
//         // alert("Please reload page");
//     }
// });
