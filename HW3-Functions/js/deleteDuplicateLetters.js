function deleteDuplicateLetters() {
    let sentence = prompt('Function 11 - "Delete duplicate letters". Enter any sentence (word):');
   while (!isNaN(sentence)) {
    sentence = prompt('Function 11 - "Delete duplicate letters". Enter any SENTENCE (WORD):');
   }
   let lowSentence = sentence.toLowerCase();
   let newWord = lowSentence.split('');
   let wordForDel = newWord.slice();
   let deleted = [];
   for (let i = 0, o = 0; i < lowSentence.length; i++, o++) {
       for (let y = o + 1; y <= lowSentence.length; y++) {
        if (lowSentence[o] === lowSentence[y]) {
            deleted += wordForDel.splice(i, 1);
            newWord = [...newWord.slice(0, i), ...newWord.slice(i + 1)];
            i--;
            break;
        } else {for (let p = 0; p < deleted.length; p++)
            if (lowSentence[o] === deleted[p]) {
                deleted += wordForDel.splice(i, 1);
                newWord = [...newWord.slice(0, i), ...newWord.slice(i + 1)];
                o++;
                break;
                }
       }
       
   }
}
   newWord = newWord.join('');
   alert(`The new word without duplicate letters from "${sentence}" is "${newWord}"`);
}

