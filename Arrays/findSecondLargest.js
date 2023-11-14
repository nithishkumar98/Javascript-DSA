function findSecondLargest(arr, n) {
    let largest = arr[0];
    let secondLargest = -1;
    for (let i = 1; i < n; i++) {
      if (arr[i] > largest) {
        secondLargest = largest
        largest = arr[i];
      }
      else if(arr[i] > secondLargest){
        secondLargest = arr[i]
      }
    }
    return secondLargest;
  }
  
  arr = [2, 2, 2, 2, 2, 2, 2, 2];
  const res = findSecondLargest(arr, arr.length);
  console.log(res)
  