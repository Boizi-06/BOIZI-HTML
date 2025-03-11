let pass = prompt('moi ban nhap mat khau');
checkPass(pass);
function checkPass (pass) {
    let flag = true;
    if(pass.length < 8) {
        console.log('mat khau it nhat 8 ki tu');
        flag=false;
    }
    let count = 0;
    for(i=0;i<pass.length;i++) {
        if(pass[i]==pass[i].toUpperCase()) {
            count++;
        }
    }
    if(count==pass.length) {
        console.log('mat khau phai co it nhat mot ki tu viet thuong');
        flag=false;
    } 
    count = 0;
    for(i=0;i<pass.length;i++) {
        if(pass[i]==pass[i].toLowerCase()) {
            count++;
        }
    }
    if(count==pass.length) {
        console.log('mat khau phai co it nhat mot ki tu hoa');
        flag=false;
    } 
    count=0;
    
    for(i=0;i<pass.length;i++) {
        if(isNaN(pass[i])) {
            count++
        }
    }
    if(count==pass.length) {
        console.log('mat khau phai co it nhat mot ki tu la so');
        flag=false;
    } 
    if(flag) {
        console.log('mat khau hop le ');
    }
}
