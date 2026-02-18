function flatterdata(arr){
   
    var flatterarry=[];
    for(let i=0;i < arr.length;i++){
        if(Array.isArray(arr[i])){
            flatterarry.push(...flatterdata(arr[i]));
        }else{
            flatterarry.push(arr[i]);
        }
    }
    return flatterarry;

}
var flat=[1,2,3,[6,7],[8],9]
const data = flatterdata(flat);
console.log("array data "+ data)