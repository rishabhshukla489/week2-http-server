const arr=[1,23,4,55,6,77]


const inp=arr.map(function transform(i){
    return i*2;
}); 
console.log(inp)

const out=arr.filter(function(n){
    if(n%2==0){
        return true
    }else{
        return false              
    }
})
console.log(out)
const ar=["har","kir","hrishabh"]
const o1=ar.filter((n)=>{
    if(n.startsWith("h")){
        return true;
    }else{
        return false;
    }
})
console.log(o1)