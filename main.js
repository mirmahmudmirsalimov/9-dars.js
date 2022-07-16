var someWord = prompt("Ismigizni kiriting");

var newArray = someWord.split("").reverse("");


newArray[0] = newArray[0].toUpperCase();
newArray[newArray.length - 1] = newArray[newArray.length - 1].toLowerCase();

var result = newArray


console.log(result);