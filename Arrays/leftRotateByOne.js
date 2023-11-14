function leftRotateByOne(arr, n) {
    let start = arr[0];
    for(let i=1; i<n; i++){
        arr[i-1] = arr[i];
    }
    arr[n-1] = start
    return arr
  }
  
  arr = [1, 2, 4, 9, 6, 5, 6, 3];
  copyArr = [...arr]
  const res = leftRotateByOne(arr, arr.length);
  console.log(copyArr)
  console.log(res)
  