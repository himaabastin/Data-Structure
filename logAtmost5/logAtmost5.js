
// O(1)
const logAtmost5=(n)=>{
    for(i=0;i<=Math.min(5,n);i++){
        console.log(i);
    }

}

console.log(logAtmost5(7));