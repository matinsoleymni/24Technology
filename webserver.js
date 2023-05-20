window.addEventListener("load", () => {
    let res = "";
    fetch("php/test.php", { method: "POST" })
    .then(res => res.text())
    .then(txt => res == txt);

    if(res != true){
        fetch("php/Select.php", { method: "POST" })
        .then(res => res.text())
        .then(txt => console.log(txt));
    }

})

let HomePage = {
    'title' : 'Hello Welcome the Homepage',
    'dis'   : 'This is a home page of matin new Project :)) Z',
    'meta'  : ['#admin' , 'Admin']
}



let Admin = {
    'title' : 'Hello Welcome the Admin Panel',
    'dis'   : 'This is a Admin Panel page of matin new Project :)) Z',
    'meta'  : ['#admin=users' , 'Users']
}


let AdminUser = {
    'title' : 'Hello Welcome the Admin Panel User section',
    'dis'   : 'This is a user section page of matin new Project :)) Z',
    'meta'  : ['#admin' , 'Admin']
}