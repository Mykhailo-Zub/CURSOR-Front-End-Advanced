function nameFormat() {
   let name = prompt('Function 3 - "Name format". Enter your name:');
   const type = typeof +name;
   console.log(type)
   while (+name) {
      name = prompt('Function 3 - "Name format". Enter your NAME:');
   }
   const nameSmall = name.toLowerCase();
   let firstLetter = nameSmall.slice(0, 1);
   const otherLetters = nameSmall.slice(1);
   firstLetter = firstLetter.toUpperCase();
   const rightName = firstLetter + otherLetters;
   alert(rightName);
   return rightName;
}
nameFormat();