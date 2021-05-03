//get 1 to 255
function newArr() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }
  console.log(arr);
  return arr;
}
newArr();

//Get even 1000
function getEven() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
  return sum;
}
getEven();

//Sum odd 5000
function getOdd() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
  return sum;
}

getOdd();

//Iterate an array
function iterate(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum;
}
iterate([2, 5, 3]);

//Find max
function getMax(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}
getMax([2, -5, 5, 8, 4, 7]);

//Find average
function average(arr) {
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    avg = sum / arr.length;
  }
  console.log(avg);
  return avg;
}
average([1, 3, 5, 7, 20]);

//Array odd
function oddArray() {
  var newarr = [];
  for (var i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      newarr.push(i);
    }
  }
  console.log(newarr);
  return newarr;
}
oddArray();

//Greater than Y
function greater(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count = count + 1;
    }
  }
  console.log(count);
  return count;
}
greater([5, 2, 5, 8, 9, 4, 7], 6);

//Squares
function Squares(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }

  console.log(arr);
  return arr;
}
Squares([5, 2, 6]);

//Negatives
function Negatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
  return arr;
}
Negatives([-5, -2, 6, 0]);

//Max/Min/Avg
function MaxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  var avg = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = sum / arr.length;
  var newarr = [max, min, avg];
  console.log(newarr);
  return newarr;
}
MaxMinAvg([1, 5, 10, -2]);

//Swap Values
function swapValues(arr) {
  var temp = 0;

  temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  console.log(arr);
  return arr;
}
swapValues([1, 5, 10, -2]);

//Number To String
function numberToString(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
  return arr;
}

numberToString([-1, -3, 2]);
