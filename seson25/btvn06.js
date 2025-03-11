let Name = prompt('moi nhap vao ten cua ban');
let name2 = Name.split(" ");
console.log(name2);
// name2[i].toUpperCase
vietHoa(name2);

function vietHoa (name2) {
    
    for (let i = 0; i < name2.length; i++) {
        if (name2[i] !== "") { 
            name2[i] = name2[i][0].toUpperCase() + name2[i].slice(1).toLowerCase();
        }
    }
   console.log(name2.join(" ")); 
}

