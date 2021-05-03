//1 Biggie Size
function big(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
    }
  }
  console.log(arr);
  return arr;
}
big([3, 5]);

//2 Print Low, Return High
function printReturn(arr) {
  var min = arr[0];
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  return max;
}
printReturn([5, 8, 9, -2, 4, -5]);

//3 Print One, Return Another
function printReturn(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      return arr[i];
    }
  }
}
printReturn([5, 7, 8, 2, 0, 6]);

//4 Double Vision
function doubleVision(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  console.log(newArr);
  return newArr;
}

doubleVision([1, 2, 3]);

//5 Count Positives
function countPositives(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
      arr[arr.length - 1] = count;
    }
  }
  console.log(arr);
  return arr;
}
countPositives([-1, 1, 1, 1]);

//6 Evens and Odds
function evensAndOdds(arr) {
  var evens = 0;
  var odds = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds++;
      evens = 0;
    } else {
      evens++;
      odds = 0;
    }

    if (odds === 3) {
      console.log("That's odd!");
      odds = 0;
    } else if (evens === 3) {
      console.log("Even more so!");
      evens = 0;
    }
  }
}
evensAndOdds([1, 3, 5, 8, 4, 5, 7]);
evensAndOdds([2, 4, 6, 5, 8]);

//7 Increment the Seconds
function incrementTheSeconds(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i] += 1;
    }
  }
  console.log(arr);
  return arr;
}
incrementTheSeconds([1, 2, 3, 4, 5, 6, 7, 8]);

//8 revious Lengths
function previousLengths(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1].length;
  }
  console.log(arr);
  return arr;
}
previousLengths(["hello", "dojo", "awesome"]);

//9 Add Seven
function addSeven(arr) {
  var arrnew = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 7;
  }
  console.log(arr);
  return arr;
}
addSeven([1, 2, 3]);

//10 Reverse Array
function ReverseArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
console.log(ReverseArr([1, 2, 3, 4, 5]));

//11 Outlook: Negative
function outlook(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = arr[i] - arr[i] * 2;
    }
    arr2.push(arr[i]);
  }
  console.log(arr2);
  return arr2;
}
outlook([1, -3, 5]);

//12 Always Hungry
function hungry(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      temp = 1;
    }
  }
  if (temp == 1) {
    console.log("I'm hungry");
    temp = 0;
  }
}

hungry(["food", "food", "test", "testtt", "food"]);
hungry(["test", "testtt"]);

//13 Swap Toward the Center
function SwapTowardtheCenter(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start = start + 1;
    end = end - 1;
  }
  return arr;
}
console.log(SwapTowardtheCenter([1, 2, 3, 4, 5, 6, 7]));

//14 Scale the Array
function scale(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  console.log(arr);
  return arr;
}

scale([2, 4, 5, 6], 2);
