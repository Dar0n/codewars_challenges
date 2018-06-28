function anagrams(word, words) {
  let wordDict = letterCounter(word);
  return words.filter(w => word.length === w.length && compareCounters(wordDict, letterCounter(w)));
}

function letterCounter(word) {
  let wordDict = {};
  for (let c of word){
    wordDict[c] = wordDict[c]+1 || 1;
  }
  return wordDict;
}

function compareCounters(c1, c2) {
  for (let c in c1) {
    if (c1[c] !== c2[c]) {
      return false;
    }
  }
  return true;
}

module.exports.anagrams = anagrams;