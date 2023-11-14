function linearSearch(arr, n, k) {
    for(let i=0; i<n; i++){
        if(arr[i]===k){
            return i
        }
    }

  }
  
  arr = [1, 2, 4, 9, 6, 5, 6, 3];
  const res = linearSearch(arr, arr.length, 6);
  console.log(res)
  