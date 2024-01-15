const merge = (arrOne, arrTwo) => {
  let i = 0;
  let j = 0;
  let a = [];
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      a.push(arrOne[i]);
      i++;
    } else {
      a.push(arrTwo[j]);
      j++;
    }
  }
  while (i < arrOne.length) {
    a.push(arrOne[i]);
    i++;
  }
  while (j < arrTwo.length) {
    a.push(arrTwo[j]);
    j++;
  }
  return a;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([5, 2, 1, 10, 8, 7, 6]));
