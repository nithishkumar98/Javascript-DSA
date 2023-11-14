function findLargest(arr, n) {
  let largest = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

arr = [1, 2, 4, 9, 6, 5, 6, 3];
const res = findLargest(arr, arr.length);
console.log(res)
