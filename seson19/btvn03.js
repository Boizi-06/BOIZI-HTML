let vnd = parseFloat(prompt('nhap so tien viet ma ban muon chuyen doi sang dola'));
let usd = parseFloat(prompt('nhap so tien dola ma ban muon chuyen doi sang vnd'));
let resault = vnd /23000;
let resault2 = usd*23000;
console.log(`${vnd}vnd = ${resault}usd voi ti gia 1$ bang 23.000vvnd`);
console.log(`${usd}usd = ${resault2}vnd voi ti gia 1$ bang 23.000vvnd`);