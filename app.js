let who = ['The dog','My granma','His turtle','My bird'];
let what = ['ate','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

//random position
let whoRand = Math.floor(Math.random()*who.length);
let whatRand = Math.floor(Math.random()*what.length);
let whenRand = Math.floor(Math.random()*when.length);

let excuse1 = who[whoRand]+what[whatRand]+when[whenRand];

let 