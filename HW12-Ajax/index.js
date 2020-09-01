const BASE_URL = "https://swapi.dev/api/";
let language = null;
const container = document.querySelector(".results");
const episodeInput = document.getElementById("episode");

function getCharacters() {
    const id = selectedEpisode(episodeInput);
    return axios
        .get(`${BASE_URL}films/${id}/`)
        .then((res) => {
            return res.data.characters;
        })
        .then((charLinks) => {
            const newLinks = [];
            for (let i = 0; i < charLinks.length; i++) {
                newLinks[i] = charLinks[i].replace("http://", "https://");
            }
            return Promise.all(
                newLinks.map((el) => {
                    return axios.get(el).then((res) => res.data);
                })
            );
        })
        .catch((err) => {
            console.log("Error!", err);
        });
}

function addGenderImg(character) {
    if (character.gender === "male") {
        character.gender = '<img class="gender" src="./img/male.png">';
    } else if (character.gender === "female") {
        character.gender = '<img class="gender" src="./img/female.png">';
    } else if (character.gender === "hermaphrodite") {
        character.gender = '<img class="gender" src="./img/herm.png">';
    } else if (character.gender === "n/a" || character.gender === "none") {
        character.gender = '<img class="gender" src="./img/na.png">';
    }
}

function showCharacters(characters) {
    container.innerHTML = "";
    characters.map((el) => {
        addGenderImg(el);
        const charElement = document.createElement("div");
        charElement.className = "char";
        charElement.innerHTML = `
        <p class="name">Name:  <span>${el.name}</span></p>
        <p class="birth">Birthday year:  <span>${el.birth_year}</span></p>
        <p class="gender">Gender:  <span>${el.gender}</span></p>`;
        container.append(charElement);
    });
}

function selectedEpisode(selector) {
    return selector.value;
}

document.getElementById("char-btn").addEventListener("click", () => {
    document.querySelector(".nav-btns").classList.remove("visible");
    getCharacters().then(showCharacters);
});

let page = 1;

function getPlanets(page) {
    return axios
        .get(`${BASE_URL}planets/?page=${page}`)
        .then((res) => res.data.results);
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
