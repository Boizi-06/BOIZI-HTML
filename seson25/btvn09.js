let users= [];
let accCount = 0;
let choice = 0;


do {
    console.log('1.them tai khoan');
    console.log('2.thoat');
    choice = Number(prompt('nhap lua chon'));
    switch (choice) {
        case 1 :
            for(i=accCount;i<accCount+1;i++) {
                users[i] = prompt(`moi ban nhap tai khoan ${i+1}`);
                checkUser(users[i]);
                if( checkUser(users[i])==true) {
                    if(accCount>=2) {
                        checkUser2(users,users[i]);
                        if(checkUser2(users,users[i]) == true) {
                            console.log('nhap tai khoan thanh cong');
                            accCount++;
                            break;
                        } else {
                            users[i]="";
                        }
                    } else {
                        accCount++;
                        break;
                    }       
                }else {
                    users[i]="";
                }
            }
            break;
        case 2 :
            console.log(users);
            break;
        case 3:
            console.log('thoat');
            break;     
        default : 
            console.log('nhap lua chon hop le ');        
    }
} while(choice!=3)



function checkUser (user) {
    let a = ".com";
    let b = ".vn";
    let d = "@"
    let flag = true;
    
    if(!user.includes(d)) {
        flag=false;
    }
    if(user.slice(user.length-4,user.length) == a || user.slice(user.length-3,user.length) == b) {
        flag=true;
    } else  {
        flag=false;
    } 
    if(flag == false) {
        console.log('tai khoan khong hop le ');
    } else {
        return true;
    }
}
function checkUser2 (user,users) {
    let cout2=0;
    for(i=0;i<user.length;i++) {
        if(users == user[i]) {
            cout2++;
            return false;
        }
    }
    if(cout2==1) {
        return true;
    } else {
        console.log('tai khoan da ton tai'); 
    }
}

