export function getRandomChar() {
    let randomChar = "";
    return (randomChar += String.fromCharCode(Date.now().toString().slice(-5)));
}
