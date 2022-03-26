let a = 1;
const limitinter = setTimeout(() => {
  a++;
  console.log(a);
}, 3000);

clearTimeout(limitinter);


