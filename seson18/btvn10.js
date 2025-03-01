let num = parseInt(prompt("Nhập số nguyên (0-999):"));

if (num < 0 || num > 999 || isNaN(num)) {
    console.log("Vui lòng nhập số trong khoảng từ 0 đến 999.");
} else {
    let text = "";

    let hangTram = Math.floor(num / 100);
    let soDu = num % 100 ;
    let hangChuc = Math.floor(soDu / 10);
    let hangDonVi = num % 10;

    if (hangTram === 0 && hangChuc === 0 && hangDonVi === 0) {
        text = "không";
    } else {
        if (hangTram > 0) {
            switch (hangTram) {
                case 1:
                    text += "một trăm";
                    break;
                case 2:
                    text += "hai trăm";
                    break;
                case 3:
                    text += "ba trăm";
                    break;
                case 4:
                    text += "bốn trăm";
                    break;
                case 5:
                    text += "năm trăm";
                    break;
                case 6:
                    text += "sáu trăm";
                    break;
                case 7:
                    text += "bảy trăm";
                    break;
                case 8:
                    text += "tám trăm";
                    break;
                case 9:
                    text += "chín trăm";
                    break;
            }
        }

        if (hangChuc === 0 && hangDonVi > 0 && hangTram > 0) {
            text += " linh";
        }

        if (hangChuc === 1) {
            text += " mười";
        } else if (hangChuc > 1) {
            switch (hangChuc) {
                case 2:
                    text += " hai mươi";
                    break;
                case 3:
                    text += " ba mươi";
                    break;
                case 4:
                    text += " bốn mươi";
                    break;
                case 5:
                    text += " năm mươi";
                    break;
                case 6:
                    text += " sáu mươi";
                    break;
                case 7:
                    text += " bảy mươi";
                    break;
                case 8:
                    text += " tám mươi";
                    break;
                case 9:
                    text += " chín mươi";
                    break;
            }
        }

        if (hangChuc === 1 && hangDonVi > 0) {
            switch (hangDonVi) {
                case 1:
                    text += " một";
                    break;
                case 2:
                    text += " hai";
                    break;
                case 3:
                    text += " ba";
                    break;
                case 4:
                    text += " bốn";
                    break;
                case 5:
                    text += " năm";
                    break;
                case 6:
                    text += " sáu";
                    break;
                case 7:
                    text += " bảy";
                    break;
                case 8:
                    text += " tám";
                    break;
                case 9:
                    text += " chín";
                    break;
            }
        } else if (hangChuc !== 1 && hangDonVi > 0) {
            switch (hangDonVi) {
                case 1:
                    text += " mốt";
                    break;
                case 2:
                    text += " hai";
                    break;
                case 3:
                    text += " ba";
                    break;
                case 4:
                    text += " bốn";
                    break;
                case 5:
                    text += " lăm";
                    break;
                case 6:
                    text += " sáu";
                    break;
                case 7:
                    text += " bảy";
                    break;
                case 8:
                    text += " tám";
                    break;
                case 9:
                    text += " chín";
                    break;
            }
        }
    }

    console.log(`số bạn vừda nhập có cách đọc là : ${text}`);
}
