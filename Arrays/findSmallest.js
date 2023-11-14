function findSmallest(arr, n) {
    let smallest = Number.MAX_SAFE_INTEGER;
    for(let i =0; i<n; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
  }
  
  arr = [9, 6, 5, 4, 6, 2 ,3];
  const res = findSmallest(arr, arr.length);
  console.log(res)
  