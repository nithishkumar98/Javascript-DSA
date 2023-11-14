function findSecondSmallest(arr, n) {
    let smallest = Number.MAX_SAFE_INTEGER;
    let secondSmallest = Number.MAX_SAFE_INTEGER -1;
    for(let i =0; i<n; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest;
            smallest = arr[i];
        }
        else if(arr[i] < secondSmallest && arr[i] != smallest){
            secondSmallest = arr[i]
        }
    }
    return secondSmallest;
  }
  
  arr = [9, 6, 5, 4, 6, 2 ,3];
  const res = findSecondSmallest(arr, arr.length);
  console.log(res)
  