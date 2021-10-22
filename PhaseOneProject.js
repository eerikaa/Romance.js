let text =
  "Ever since I left the city, you, you, you You and me we just don't get along";

let wordPairs = {
  ever: ["since"],
  since: ["i"],
  i: ["left"],
  left: ["the"],
  the: ["city"],
  city: ["you"],
  you: ["you", "you", "you", "and"],
  and: ["me"],
  me: ["we"],
  we: ["just"],
  just: ["dont"],
  dont: ["get"],
  get: ["along"],
};

function writeLine(wordPairs) {
  let wordsArray = wordPairs.split(" ");
  let wordPairsObj = {};
  for (let i = 0; (i = text.length); i++) {
    let key = wordsArray[i];
    let value = wordsArray[i++];

    if (wordPairsObj[key]) {
      wordPairsObj[key] = [];
    }
    wordPairsObj[key].push(value);
  }
  return wordPairsObj;
}
function generatePoem(obj, wordNumbers) {
  let keyIndex = Object.keys(obj);
  let randomWord = keyIndex[random(0, keyIndex.length)];
  let poemLine = "";
  let current = "";
  for (let i = 0; i < wordNumbers; i++) {
    if (!poemLine.length) {
      current = randomWord;
      poemLine += current;
    } else {
      let wordArray = obj[current];
      if (wordArray === undefined) {
        current = randomWord;
      } else {
        let randomIndex = random(0, wordArray.length);
        current = wordArray[randomIndex];
        poemLine += " " + current;
      }
    }
  }
  return poemLine;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generatePoem(obj, lineNumber, wordNumber) {
  while (lineNumber > 0) {
    console.log(writeLine(obj, wordNumber));
    lineNumber--;
  }
}
let pairsToRun = writeLine(text);
generatePoem(pairsToRun, 6, 5);
