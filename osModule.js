
const os = require('os')


//info about current user
const user = os.userInfo();
console.log(user)  //will give info related to os

//method for system uptime
const osUptime =  os.uptime()
console.log("the system uptime is" , osUptime + "second") // will return how long system has been running


const currentOs = {
    name:os.type(), // return os type widow linux , mac, etc
    release:os.release(), // return free memory
    totalMem: os.totalmem(), //return memory in os 
    freeMem:os.freemem() // return free mem
}

console.log(currentOs,"current os info")

