const $ = document;
const domin = 'http://127.0.0.1:5500/SingleWebApp/';
const info  = $.querySelector('.info');
const title = $.querySelector('.title');
const diti  = $.querySelector('.dit');
console.log($.URL)

if($.URL == domin+'index.html' || $.URL == domin){
    title.innerHTML = 'index.html'
    diti.innerHTML  = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!'; 
}else if($.documentURI == domin+'index.html?php=admin'){
    title.innerHTML = 'admin.panel'
    diti.innerHTML  = 'Loremkjvbns kjdsbhfjkh skjh fjkiash akjsnb  ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!';
}