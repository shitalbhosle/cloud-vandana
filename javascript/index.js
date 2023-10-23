// Q-1: Take a sentence as an input and reverse every word in that sentence.
//  Example - This is a sunny day > shiT si a ynnus yad.

function reverseWord(word) {
  let str = "";
  for (let i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  return str;
}

function reverseSentence(sentence) {
  const words = sentence.split(" ");
  let rev = [];
  for (let word of words) {
    rev.push(reverseWord(word));
  }
  const reverseSen = rev.join(" ");
  return reverseSen;
}

console.log(reverseSentence("This is a sunny day"));

//B. Perform sorting of an array in descending order.

function descOrder(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(descOrder([1, 4, 3, 2, 7, 8, 9, 5]));
