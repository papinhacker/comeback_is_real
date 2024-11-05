const n = Math.floor(Math.random() * 10);
const nString = String(n);
const sum = Number(nString) + Number(nString + nString) + Number(nString + nString + nString);
console.log(sum);