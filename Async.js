async function naveera(){
let islamabadweather = new Promise((resolve, reject) =>{
  setTimeout(() =>{
    resolve("27 Deg")
  }, 1000)
})
let karachiweather = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("23 Deg")
  },1000)
})
  // islamabadweather.then(alert)
  // karachiweather.then(alert)
  console.log("Fetching islamabad weather Please wait...");
  let islamabadW = await islamabadweather;
  console.log("Fetched islamabad weather is " + islamabadW);
  console.log("Fetching karachibweather Please wait...");
  
  let karachiW = await karachiweather;
  console.log("Fetched karachi weather is " + karachiW);
  return[islamabadW,karachiW]
}
const cherry=()=>{
  console.log("het i am cherry and i am not waiting"")
}
              const main = ()=>{
console.log("Welcome tob weather control room");
let a = await naveera();
let b = await cherry();
a.then((value)=>{
  console.log(value);
})
}
main();