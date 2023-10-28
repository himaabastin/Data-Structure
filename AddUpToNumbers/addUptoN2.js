// 2nd Method
// Big O of 1 (constant)
const addUpToN2=(n)=>{
return n * (n + 1) /2
}

const startTime=Date.now()

console.log(addUpToN2(1000000000));
const endTime=Date.now()

const TimeDiff=(endTime-startTime) / 1000

console.log(`Time diff = ${TimeDiff} s`);  // almost 0.005s