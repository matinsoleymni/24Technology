setTimeout(()=> {
// datas = JSON.parse(arr[0]);

if($.URL == domin+'index.html' || $.URL == domin || $.URL == domin+'#' || $.URL == domin+'index.html#'){
    $.querySelector('.a').setAttribute('href' , HomePage['meta'][0])
    $.querySelector('.a button').innerHTML = HomePage['meta'][1];
    title.innerHTML = datas.title
    diti.innerHTML  = datas.dis
}else if($.URL == domin+'#admin' || $.URL == domin+'index.html#admin'){
    $.querySelector('.a').setAttribute('href' , Admin['meta'][0])
    $.querySelector('.a button').innerHTML = Admin['meta'][1];
    title.innerHTML = datas.title
    diti.innerHTML  = datas.dis
}else if($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
    $.querySelector('.a').setAttribute('href' , AdminUser['meta'][0])
    $.querySelector('.a button').innerHTML = AdminUser['meta'][1];
    title.innerHTML = datas.title
    diti.innerHTML  = datas.dis
}else if ($.URL == domin+'#login' || $.URL == domin+'index.html#login'){
    APP.innerHTML = layouts[0];
}

window.addEventListener('locationchange', ()=>{
    setTimeout(()=> {
        datas = JSON.parse(arr[0]);
        if($.URL == domin+'index.html' || $.URL == domin || $.URL == domin+'#' || $.URL == domin+'index.html#'){
            $.querySelector('.a').setAttribute('href' , HomePage['meta'][0])
            $.querySelector('.a button').innerHTML = HomePage['meta'][1];
            title.innerHTML = datas.title
            diti.innerHTML  = datas.dis
        }else if($.URL == domin+'#admin' || $.URL == domin+'index.html#admin'){
            $.querySelector('.a').setAttribute('href' , Admin['meta'][0])
            $.querySelector('.a button').innerHTML = Admin['meta'][1];
            title.innerHTML = datas.title
            diti.innerHTML  = datas.dis
        }else if($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
            $.querySelector('.a').setAttribute('href' , AdminUser['meta'][0])
            $.querySelector('.a button').innerHTML = AdminUser['meta'][1];
            title.innerHTML = datas.title
            diti.innerHTML  = datas.dis
        }
    } , 100)
 
    
})
} , 250)