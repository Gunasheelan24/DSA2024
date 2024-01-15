const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
};

console.log(linearSearch([4, 7, 12, 22, 20, 30, 45], 4));
