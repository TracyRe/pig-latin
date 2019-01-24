


const vowels = ["a", "e", "i", "o", "u"];
const punctuation = [".", ",", ";", "!", "?"];

function translateWord(word) {

  var translation = "";

  // Check for punctuation
  var punc = null;
  var lastChar = word.charAt(word.length-1);
  if(punctuation.includes(lastChar)) {
    word = word.slice(0, -1);
    punc = lastChar;
  }

  var arrText = word.split("");  // split word into array


  // first character is a vowel
  if(vowels.includes(arrText[0])) {
     translation = word.concat("way");
  }

  // begin with 'qu'
  else if (arrText[0] === "q" && arrText[1] === "u") {
    var newText = arrText.join("");
    translation = newText.slice(2) + "quay";
  }

  // begin with consonant + 'qu'
  else if (!vowels.includes(arrText[0]) && arrText[1] === "q" && arrText[2] === "u") {
    var newText = arrText.join("");
    translation =  newText.slice(3) + (arrText[0]) + "quay";
  }

  // begin with a consonant
  else {
    let vowelIndex = 0;
    for(let i=0; i<arrText.length; ++i) {
      if(vowels.includes(arrText[i])) {
        vowelIndex = i;
        break;
      }
    }
    let newText = arrText.join("");
    translation = newText.slice(vowelIndex) + newText.slice(0, vowelIndex) + "ay";
  }

  if(punc !== null) {
    return translation + punc;
  }

  return translation;
}


/**
 * Translates a string into pig Latin
 * @param {string} text
 */
function translate(text) {

  var words = text.toLowerCase().split(" ");
  words = words.map(function(word) {
      return translateWord(word);
  });
  return words.join(" ");
}


$(document).ready(function() {

  $("form#translator").submit(function(event) {
    event.preventDefault();

    var text = $("input#input-txt").val();
    var result = translate(text);
    $("div.output").show();
    $("p#output").text(result);

  });


});
