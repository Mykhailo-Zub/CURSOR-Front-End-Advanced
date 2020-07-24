function deleteLetters() {
    let word = prompt('Function 9 - "Delete letters". Enter any word:');
   while (!isNaN(word)) {
    word = prompt('Function 9 - "Delete letters". Enter any WORD:');
   }
   let letter = prompt('Function 9 - "Delete letters". What letter do you want to delete?');
   while (!isNaN(letter) || letter.length > 1) {
    letter = prompt('Function 9 - "Delete letters". What ONE LETTER do you want to delete?');
   }
   word = word.toLowerCase();
   letter = letter.toLowerCase();
   let newWord = '';
   for (let i = 0; i < word.length; i++) {
       if (word[i] === letter) {
           continue;
       } else {
        newWord += word[i]
       }
   }
   alert(`The new word without "${letter}" from "${word}" is "${newWord}"`);
}

