function removeDuplicate(s) {
    if(s.length === 0) {
        return 0;
    }
    let uniquearray=[];
    let i=0;
    for(let i=1; i<s.length; i++) {
        if(s[i] !== s[i-1]){
            uniquearray.push(s[i]);
        }
    }
    return uniquearray;
}

let data=[1,2,4,5,6,7,8,8,10,3,2,1];
console.log(removeDuplicate(data));