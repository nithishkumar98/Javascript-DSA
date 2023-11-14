// function leftRotateByDtimes(arr, n, d) {

//     d= d % n
//     let t = 0;
//     while(t < d){
//     let start = arr[0];
//     for(let i=1; i<n; i++){
//         arr[i-1] = arr[i];
//     }
//     arr[n-1] = start
//     t++
// }
//     return arr
//   }

function leftRotateByDtimes(arr, n, d) {

    d= d % n
    let t = 0;

    let startArr = arr.slice(0,d-1);
    for(let i=d; i<n; i++){
        arr[i-d] = arr[i];
    }
    arr = [...arr, ...startArr]
    t++

    return arr
  }
  
  arr = [1, 2, 4, 9, 6, 5, 6, 3];
  copyArr = [...arr]
  const res = leftRotateByDtimes(arr, arr.length, 20);
  console.log(copyArr)
  console.log(res)
  