let arr = [];
fetch("php/test.php", { method: "POST" })
    .then(res => res.text())
    .then(txt => null)
        
fetch("php/Table.php", { method: "POST" })
    .then(res => res.text())
    .then(txt => null );
    if($.URL == domin+'#' || $.URL == domin+'index.html'){
        fetch("php/Select.php?id=1", { method: "POST" })
        .then(res => res.text())
        .then(txt => arr.push(txt));
    
    }else if ($.URL == domin+'#admin' || $.URl == domin+'index.html#admin'){
        arr.length = 0;
        fetch("php/Select.php?id=2", { method: "POST" })
        .then(res => res.text())
        .then(txt => arr.push(txt));
    }else if ($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
        arr.length = 0;
        fetch("php/Select.php?id=3", { method: "POST" })
        .then(res => res.text())
        .then(txt => arr.push(txt));
    }else if($.URL == domin+'#login' || $.URL == domin+'index.html#login'){
        fetch('./assets/layouts/login.html')
        .then(res => res.text())
        .then(txt => APP.innerHTML= txt)
    }

window.addEventListener('locationchange' , ()=> {
    arr.length = 0;
    if($.URL == domin+'#' || $.URL == domin+'index.html'){
        fetch("php/Select.php?id=1", { method: "POST" })
        .then(res => res.text())
        .then(txt => arr.push(txt));
    
    }else if ($.URL == domin+'#admin' || $.URl == domin+'index.html#admin'){
        arr.length = 0;
        fetch("php/Select.php?id=2", { method: "POST" })
        .then(res => res.text())
        .then(txt => arr.push(txt));
    }else if ($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
        arr.length = 0;
        fetch("php/Select.php?id=3", { method: "POST" })
        .then(res => res.text())
        .then(txt => arr.push(txt));
    }
})

let HomePage = {
    'meta'  : ['#admin' , 'admin']
}

let Admin = {
    'meta'  : ['#admin=users' , 'Users']
}

let AdminUser = {
    'meta'  : ['#admin' , 'Admin']
}
    