
# Pig Latin Translator

## Authors: Tracy + Justin


### SPECS

* not a word              -> false
* begin with vowel        -> append 'way'
* word with no vowels     -> append 'ay'
* begin with 1 consonant  -> move first letter to the end and append 'ay'
* begin with 2 consonants -> move first 2 letter to the end and append 'ay'
* begin with 3 consonants -> move first 3 letter to the end and append 'ay'
* begin with 'qu'         -> move first 2 letter to the end and append 'ay'
* begin consonant + 'qu'  -> move first 3 letter to the end and append 'ay'

squeal -> ealsquay