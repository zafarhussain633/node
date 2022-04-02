const {readFile , writeFile} = require("fs").promises
const {readFileSync , writeFileSync, utimesSync,} =require("fs")

     // synchruond approach 
const first  = readFileSync("./content/first.txt","utf8")
const second  =readFileSync("./content/second.txt","utf8")

writeFileSync("./content/result.txt",
 `here is the result : ${first} , ${second}`,
  {flag:"a"} // here flag a mean apend that value in file not overwrite 
)  

writeFileSync("./content/result.txt",
 `here is the result : ${first} , ${second}`,
 // if i remove flag file data will remove everytime
) 


// async approach
// we need callback for async approach
readFile("./content/third.txt","utf8", (err,result)=>{ // utf convert buffer into string
    if(err){
        console.log(err)
        return
    }
  const third  = result;
  readFile("./content/four.txt", "utf8", (err,result)=>{
      if(err){
          console.log(err)
          return
     }
  const four = result;
  writeFile("./content/result-async.txt", `result from sysncr way:  ${third} ${four}`,
  {flag:"a"},
  (err,result)=>{
      if(err){
          console.log(err)
          return
      }
      console.log("async write file",result)
  } )
  })
})





