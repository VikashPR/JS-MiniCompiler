# JS Mini Compiler 


## Example Usage (Copy paste these example codes in the compiler input box)

![Screenshot 2023-05-15 at 2 40 48 PM](https://github.com/VikashPR/JS-MiniCompiler/assets/69889418/b9eb3c24-1669-4462-9461-39649e9ba3af)

### Reverses a string

``` js

function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

let reversedString = reverseString("Hello World!");
console.log(reversedString);
```

### Sorting of an array of numbers using selection sort algorithm

```js
var array = [];

function getArrayFromUser() {
  alert("Enter the elements of the array, separated by commas:");
  var input = prompt();
  var elements = input.split(",");
  for (var i = 0; i < elements.length; i++) {
    array.push(elements[i]);
  }
}

function sortArray() {
  var sortedArray = [];
  while (array.length > 0) {
    var minValue = array[0];
    var minIndex = 0;
    for (var i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
        minIndex = i;
      }
    }
    sortedArray.push(minValue);
    array.splice(minIndex, 1);
  }
  return sortedArray;
}

getArrayFromUser();
var sortedArray = sortArray();
console.log("The sorted array is: " + sortedArray);

```

### Identifying a number as prime or not

```js
function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getNumberFromUser() {
  alert("Enter a number:");
  var input = prompt();
  return parseInt(input);
}

var number = getNumberFromUser();
var isPrime = isPrime(number);

if (isPrime) {
  alert(number + " is a prime number");
} else {
  alert(number + " is not a prime number");
}
```
