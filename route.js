const $ = document;
const Url = new URL($.documentURI);
let pushState = history.pushState;
let replaceState = history.replaceState;

history.pushState = ()=> {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
};

history.replaceState = ()=> {
    replaceState.apply(history, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
};

window.addEventListener('popstate', ()=> {
    window.dispatchEvent(new Event('locationchange'))
});

const domin = Url['origin']+Url['pathname'];
const info  = $.querySelector('.info');
const title = $.querySelector('.title');
const diti  = $.querySelector('.dit');

if($.URL == domin+'index.html' || $.URL == domin || $.URL == domin+'#'){
    $.querySelector('.a').setAttribute('href' , HomePage['meta'][0])
    $.querySelector('.a button').innerHTML = HomePage['meta'][1];
    title.innerHTML = HomePage['title']
    diti.innerHTML  = HomePage['dis']; 
}else if($.URL == domin+'#admin' || $.URL == domin+'index.html#admin'){
    $.querySelector('.a').setAttribute('href' , Admin['meta'][0])
    $.querySelector('.a button').innerHTML = Admin['meta'][1];
    title.innerHTML = Admin['title']
    diti.innerHTML  = Admin['dis']
}else if($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
    $.querySelector('.a').setAttribute('href' , AdminUser['meta'][0])
    $.querySelector('.a button').innerHTML = AdminUser['meta'][1];
    title.innerHTML = AdminUser['title']
    diti.innerHTML  = AdminUser['dis']
}


window.addEventListener('locationchange', ()=>{
    if($.URL == domin+'index.html' || $.URL == domin || $.URL == domin+'#'){
        $.querySelector('.a').setAttribute('href' , HomePage['meta'][0])
        $.querySelector('.a button').innerHTML = HomePage['meta'][1];
        title.innerHTML = HomePage['title']
        diti.innerHTML  = HomePage['dis'];
    }else if($.URL == domin+'#admin' || $.URL == domin+'index.html#admin'){
        $.querySelector('.a').setAttribute('href' , Admin['meta'][0])
        $.querySelector('.a button').innerHTML = Admin['meta'][1];
        title.innerHTML = Admin['title']
        diti.innerHTML  = Admin['dis']
    }else if($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
        $.querySelector('.a').setAttribute('href' , AdminUser['meta'][0])
        $.querySelector('.a button').innerHTML = AdminUser['meta'][1];
        title.innerHTML = AdminUser['title']
        diti.innerHTML  = AdminUser['dis']
    }
    let url = new URL($.documentURI) ;
    console.log(url);
})