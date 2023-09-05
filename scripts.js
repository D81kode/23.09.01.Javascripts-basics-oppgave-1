console.log("Hello world");

let comics = [
  // Oppgave 1.0
  "Saga",
  "Rat Girls",
  "Sandman",
  "Descender",
  "Y The Last Man",
  "Monstress",
  "The Boys",
  "Elf Quest",
  "Druuna",
  "Transmetropolitan",
];

console.log(comics);

comics.pop(); // Fjærner det siste elementet i arrayet comics

console.log(comics);

comics.push("Penthouse Comics"); // la til et nytt element i arrayet comics

console.log(comics);

// comics.pop(3, 7);

// // let comics.splice(2, 6) // orker ikke kukke mer med detta nå.

console.log("Comic:", comics[4], "Is the fifth entry"); // oppgave 1.1
