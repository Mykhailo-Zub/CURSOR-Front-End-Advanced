function countLetter() {
    let word = prompt('Function 6 - "Letter count". Enter any word:');
   while (!isNaN(word)) {
    word = prompt('Function 6 - "Letter count". Enter any WORD:');
   }
   let letter = prompt('Function 6 - "Letter count". What letter do you want to count?');
   while (!isNaN(letter) || letter.length > 1) {
    letter = prompt('Function 6 - "Letter count". What ONE LETTER do you want to count?');
   }
   word = word.toLowerCase();
   letter = letter.toLowerCase();
   let count = 0;
   for (let i = 0; i < word.length; i++) {
       if (word[i] === letter) {
           count++;
       }
   }
   alert(`A letter "${letter}" in a word "${word}" occurs ${count} times`);
}

