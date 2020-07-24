function isPalyndrom() {
    let word = prompt('Function 10 - "Is your word palyndrom". Enter any word:');
   while (!isNaN(word)) {
    word = prompt('Function 10 - "Is your word palyndrom". Enter any WORD:');
   }
   let lowWord = word.toLowerCase();
   let wordWithoutSpace = '';
   for (let i = 0; i < lowWord.length; i++) {
       if (lowWord[i] === " ") {
           continue;
       } else {
           wordWithoutSpace += lowWord[i];
       }
   }
   let reverseWord = '';
   for (let i = wordWithoutSpace.length - 1; i >= 0; i--) {
       reverseWord += wordWithoutSpace[i];
   }
   const answer = wordWithoutSpace === reverseWord ? `Word "${word}" is palyndrom` : `Word "${word}" is not palyndrom`;
   alert(answer);
   return answer;
}
