let arr = [];
    fetch("php/test.php", { method: "POST" })
    .then(res => res.text())
    .then(txt => console.log(txt))
    
    fetch("php/Table.php", { method: "POST" })
    .then(res => res.text())
    .then(txt => console.log(txt));

    fetch("php/Select.php?id=1", { method: "POST" })
    .then(res => res.text())
    .then(txt => arr.push(txt));
    console.log(arr);

let HomePage = {
    'meta'  : ['#admin' , 'admin']
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