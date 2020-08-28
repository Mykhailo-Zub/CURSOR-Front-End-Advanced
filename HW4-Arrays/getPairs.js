const girls = ["Олена", "Іра", "Світлана"];
const boys = ["Саша", "Ігор", "Олексій"];

const getPairs = (arr1, arr2) =>
    arr1.map((student, index) => [`${student} і ${arr2[index]}`]);

export function getPairsExport() {
    console.log(getPairs(boys, girls));
}
