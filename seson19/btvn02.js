
let a = prompt('nhap chuoi ban muon kiem tra ');
let chuCai = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (a.indexOf(chuCai) !== -1) {
    console.log("ký tự " + input + " là chữ cái");
} else {
    console.log("không phải chữ cái");
}
