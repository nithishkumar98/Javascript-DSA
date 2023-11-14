// function moveZerosToEnd(arr, n) {
//     temp = [];
//     for(let i=0; i<n ;i ++){
//         if(arr[i] != 0){
//             temp.push(arr[i])
//         }
//     }
//     for(let j = temp.length; j<n ; j++){
//         temp.push(0)
//     }

//     for(let k = 0; k<n; k++){
//         arr[k] = temp[k]
//     }
//     return arr

//   }

function moveZerosToEnd(arr, n) {
    let j = -1;
    for(let i=0; i<n ;i ++){
        if(arr[i] == 0){
            j = i
            break; // after finding the first zero just take that index and break;
        }
    }
    for(let i = j+1; i<n; i++){ 
        if(arr[i] !==0){ //if incoming element is not equal to zero then swap
            [arr[i], arr[j]] = [arr[j], arr[i]] // swapping of element between first zero and incoming non-zero.
            j++ //incrementing the 0's index(j) by 1 after shifting
        }
    }
    return arr

  }
  
  arr = [1, 2, 0, 4, 9, 0, 6, 5, 0, 6, 3];
  const res = moveZerosToEnd(arr, arr.length);
  console.log(res)
  