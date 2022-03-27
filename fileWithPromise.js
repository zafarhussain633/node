const { readFile, writeFile } = require("fs");

const getText = (path) => {
  const promises = new Promise((resove, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resove(result);
      }
    });
  });
  return promises;
};


const saveText = (path)=>{
  const promise =  new Promise((res,rej)=>{
    writeFile(path, "i am saving text" , {flag:"a"}, (err,result)=>{
      if(err){
        rej(err)
      }else{
        res(result)
      }
    })
  })
  return promise
}

getText("./content/first.txt")   //with promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((res) => {
    console.log(res, "finally");
  });


  saveText("./content/result.txt").then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })

callReadFile = async () => {    //with async await
  try {
    const file1 = await getText("./content/second.txt");
    const file2 =  await getText("./content/third.txt");
    console.log(file1,file2)
  } catch (err) {
    console.log(res);
  }
};



callReadFile();
