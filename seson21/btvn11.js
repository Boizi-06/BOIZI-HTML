let month = Number(prompt('nhap thang sinh'));
let day = Number(prompt('nhap ngay sinh'));
let dayMax = 0;
if ((Number.isInteger(month)) && month >0 && month <12) {
    if(month == 2) {
        dayMax= 29;
    } else if ( month = 4,6,9,11) {
        dayMax=30;
    } else {
        dayMax = 31;
    }
   
}else {
    console.log('nhap so thang hop le ');
}
if ( day > dayMax) {
    console.log('sai dinh dang ngay');
} else {
    switch (month) {
        case 3 :
            if(day >= 21 ) {
                console.log('ban cung bach duong');
            } else {
                console.log('ban cung song ngu ');
            }
            break;
        case 4 :
            if(day>=21) {
                console.log('ban cung kim nguu ');
            } else {
                console.log('ban cung bach duong');
            }
            break;
        case 5: 
            if(day >=21) {
                console.log('ban cung song tu');
    
            } else {
                console.log('ban cung kim nguu ');
            }
            break;
        case 6 :
            if (day >= 22) {
                console.log('ban cung cu giai') ;
            } else {
                console.log('ban cung song tu');
            }
            break;
        case 7 : 
            if (day >= 23) {
                console.log('ban cung su tu ');
            } else {
                console.log('ban cung cu giai') ;
            }
            break;
        case 8 :
            if (day >= 23) {
                console.log('ban cung su nu');
            } else {
                console.log('ban cung su tu ');
            }
            break;
        case 9 :
            if(day >= 23) {
                console.log('ban cung thien binh');
            } else {
                console.log('ban cung su nu');
            }
            break;
        case 10 :
            if(day>= 24) {
                console.log('ban cung bo cap');
            }else {
                console.log('ban cung thien binh');
            }
            break;
        case 11 :
            if(day>=23) {
                console.log('ban cung nhan ma ');
            } else {
                console.log('ban cung bo cap');
            }
            break;
        case 12 : 
            if ( day >= 22 ) {
                console.log('ban cung ma ket ');
            } else {
                console.log('ban cung nhan ma ');
            }
            break;
        case 1 : 
            if( day >= 20) {
                console.log('ban cung bao binh');
            } else {
                console.log('ban cung ma ket ');
            }
            break;
        case 2 : 
            if (day >= 19) {
                console.log('ban cung song ngu ');
            } else {
                console.log('ban cung bao binh');
            }
            break;
        default :
            break;
    
    }
}
