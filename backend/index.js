const Dragon = require('./dragon.js');

const fooey = new Dragon({
  birthdate: new Date(), 
  nickname: 'fooey'
});

const baloo = new Dragon({
  birthdate: new Date(), 
  nickname: 'baloo'
});

const mimar = new Dragon();

setTimeout(() => {
  const gaufus = new Dragon();
  console.log(gaufus);
}, 3000);


console.log(fooey);
console.log(baloo);
console.log(mimar);



