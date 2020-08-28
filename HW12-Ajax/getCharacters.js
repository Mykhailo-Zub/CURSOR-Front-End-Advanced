// import { axios } from "../HW14-Webpack/node_modules/axios";
const axios = require("../HW14-Webpack/node_modules/axios");

export function getCharacters() {
    return axios
        .get(`https://swapi.dev/api/films/1/`)
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
