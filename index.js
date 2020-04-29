 const findAnagrams = (word, list) => {
  return list.filter(anagram => areAnagrams(word, anagram));
}
function areAnagrams(word1, word2) {
  return sortLetters(word1) === sortLetters(word2)
      && word2.toLowerCase() !== word1.toLowerCase()
}
function sortLetters(word) {
  return word.toLowerCase().split('').sort().join('');
}
module.exports = findAnagrams;
