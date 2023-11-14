function isSorted(arr, n) {
    for(let i=0; i< n-1; i++){
        if(arr[i] <= arr[i+1] ){
            continue;
        }
        return false;
    }
    return true;
  }
  
  arr = [1, 2, 4, 9, 6, 5, 6, 3];
//   arr = [1, 2,2, 3,4,5,6];
  const res = isSorted(arr, arr.length);
  console.log(res)
  