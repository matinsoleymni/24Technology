const $ = document;
let pushState = history.pushState;
let replaceState = history.replaceState;

history.pushState = function() {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
};

history.replaceState = function() {
    replaceState.apply(history, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
};

window.addEventListener('popstate', function() {
    window.dispatchEvent(new Event('locationchange'))
});

const domin = 'http://127.0.0.1:5500/SingleWebApp/'; // یدونه ازش لایوسرور بگیرید و هر چیزی که توی ادرس نشون داد رو اینجا بزارید
const info  = $.querySelector('.info');
const title = $.querySelector('.title');
const diti  = $.querySelector('.dit');

if($.URL == domin+'index.html' || $.URL == domin || $.URL == domin+'#'){
    $.querySelector('.a').setAttribute('href' , '#admin')
    $.querySelector('.a button').innerHTML = 'Admin';
    title.innerHTML = 'Home Page'
    diti.innerHTML  = 'This is Home Page :) matin is very love z:)  Zmat2411'; 
}else if($.URL == domin+'#admin' || $.URL == domin+'index.html#admin'){
    $.querySelector('.a').setAttribute('href' , '#admin=users')
    $.querySelector('.a button').innerHTML = 'User section';
    title.innerHTML = 'Admin Panel'
    diti.innerHTML  = 'Loremkjvbns kjdsbhfjkh skjh fjkiash akjsnb  ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!';
}else if($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
    $.querySelector('.a').setAttribute('href' , '#admin')
    $.querySelector('.a button').innerHTML = 'Admin';
    title.innerHTML = 'Admin Panel users Section'
    diti.innerHTML  = 'Loremkjvbns kjdsbhfjkh skjh fjkiash akjsnb  ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!';
}

window.addEventListener('locationchange', function(){
    if($.URL == domin+'index.html' || $.URL == domin || $.URL == domin+'#'){
        $.querySelector('.a').setAttribute('href' , '#admin')
        $.querySelector('.a button').innerHTML = 'Admin';
        title.innerHTML = 'Home Page'
        diti.innerHTML  = 'This is Home Page :) matin is very love z:)  Zmat2411'; 
    }else if($.URL == domin+'#admin' || $.URL == domin+'index.html#admin'){
        $.querySelector('.a').setAttribute('href' , '#admin=users')
        $.querySelector('.a button').innerHTML = 'User section';
        title.innerHTML = 'Admin Panel'
        diti.innerHTML  = 'Loremkjvbns kjdsbhfjkh skjh fjkiash akjsnb  ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!';
    }else if($.URL == domin+'#admin=users' || $.URL == domin+'index.html#admin=users'){
        $.querySelector('.a').setAttribute('href' , '#admin')
        $.querySelector('.a button').innerHTML = 'Admin';
        title.innerHTML = 'Admin Panel users Section'
        diti.innerHTML  = 'Loremkjvbns kjdsbhfjkh skjh fjkiash akjsnb  ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!';
    }
})