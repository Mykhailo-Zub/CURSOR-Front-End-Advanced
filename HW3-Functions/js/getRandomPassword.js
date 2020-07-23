function getRandomPassword() {
    let randomPass = '';
    let passLength = +prompt('Function 8 - "Get random password". Enter the length of password:');
    if (passLength === 0) {
        for (let i = 0; i < 8; i++) {
            let random = Math.floor(Math.random() * 10);
            randomPass += random.toString();
        } 
    } else {while (!+passLength) {
        passLength = +prompt('Function 8 - "Get random password". Enter the LENGTH of password:');
    }   for (let i = 0; i < +passLength; i++) {
            let random = Math.floor(Math.random() * 10);
            randomPass += random.toString();
    } }
    alert(`Your random password is ${randomPass}`)
}

