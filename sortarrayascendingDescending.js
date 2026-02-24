function reverse(arr){
 for(let i=0; i<arr.length; i++){
     for(let j=0; j<i; j++){
         if(arr[i]>arr[j]){
             var temp=arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
         }
     }
 }
    console.log(arr);
}
reverse([21,78,3,2,1])

function ascend(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j < arr.length;j++){
            if(arr[i]>arr[j]){
                var temp=arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
ascend([9,3,8,4,2,1,10])