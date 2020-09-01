import { convertCurrency } from "../../HW3-Functions/js/converCurrency.js";
import { getPairsExport } from "../../HW4-Arrays/getPairs.js";
import { filterEvenNumbers } from "../../HW5-Arrays.methods/filterEvenNumbers";
import { studentsName } from "../../HW6-Objects/getStudentsName";
import { getUkraineTaxes } from "../../HW7-Context/getTaxes";
import { Student } from "../../HW8-Prototypes__ES6classes/Student";
import { getRandom } from "../../HW9-DOM/colorChanger";
import { getRandomChar } from "../../HW11-Promises/getRandomChar";
import { getCharacters } from "../../HW12-Ajax/getCharacters";
import "./style.css";
import background from "../../HW12-Ajax/img/wrapper.jpg";

//HW3
convertCurrency();

//HW4
getPairsExport();

//HW5
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//HW6
studentsName();

//HW7
getUkraineTaxes();

//HW8
const ostapBender = new Student(
    "Вища Школа Психотерапії м.Одеса",
    1,
    "Остап Бендер",
    [5, 4, 4, 5]
);

console.log(ostapBender);

//HW9
console.log(getRandom());

//HW11
console.log(getRandomChar());

//HW12
getCharacters().then((res) => console.log(res));

document.body.style.backgroundImage = `url('../HW14-Webpack/dist/${background}')`;
