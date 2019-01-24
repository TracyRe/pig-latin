


const vowels = ["a", "e", "i", "o", "u"];



/**
 * Identifies a leap year. Returns a boolean.
 * @param {string} text
 */
function translate(text) {
  var translation = "";

  var arrWord = text.toLowerCase().split("");  // split word into array

  //first character is a vowel
  if(vowels.includes(arrWord[0])) {
     return text.concat("way");
  } else if (arrWord[0] === "q" && arrWord[1] === "u") {
    var newText = arrWord.join("");
    return newText.slice(2) + "quay";
  } else if (!vowels.includes(arrWord[0]) && arrWord[1] === "q" && arrWord[2] === "u") {
    var newText = arrWord.join("");
    return newText.slice(3) + (arrWord[0]) + "quay";
  } else {
    return "not valid text!";
  }

}


$(document).ready(function() {

  $("form#translator").submit(function(event) {
    event.preventDefault();

    var text = $("input#input-txt").val();
    var result = translate(text);
    $("p#output").text(result);

  });


});
