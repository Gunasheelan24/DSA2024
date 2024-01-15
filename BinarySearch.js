const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    if (val > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let Result = binarySearch([1, 10, 15, 20, 25, 30, 35, 40], 15);
binarySearch === -1
  ? console.log("Element is Not Found")
  : console.log(`Value Found In The IndexOf ${Result}`);
