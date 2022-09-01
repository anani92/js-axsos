function alwaysHungry(arr) {
  let counter = 0;
  for(let i=0; i< arr.length; i++){

    if(arr[i]=== 'food'){
      counter += 1;
      console.log('yummy')
    }
  } if (counter === 0) {
    console.log('I\'m hungry')
  }

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);


function highPass(arr, cutoff) {
  var filteredArr = [];
  for(let i=0; i< arr.length; i++){
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i])
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
  var avrg = arr.reduce((acc, val) => acc + val) / (arr.length);
  var count = arr.filter(num => num > avrg);


  return count.length;
}

function reverse(arr) {
  // your code here
  const reversed = [];
  for(let i=arr.length-1; i>=0; i--){
    reversed.push(arr[i])
  }

  return reversed;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
  var fibArr = [0, 1];
  if (n<= 1){
    return n
  } else {
    let next;
    for(let i=2; i<= n; i++){
      next = fibArr[i-1] + fibArr[i-2];
      fibArr.push(next)
    }
  }

  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

