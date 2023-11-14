function removeDuplicates(arr, n) {
    let i = 0;
    for(let j = 1; j<n; j++){
       if(arr[i] != arr[j]){
         arr[i+1] = arr[j]
         i++
       }
    }
    return arr
   }
   
//    arr = [1, 2, 4, 9, 6,4,2, 5, 6, 3];
   arr = [1, 2,2, 4,4, 9,9];
   const res = removeDuplicates(arr, arr.length);
   console.log(res)
   