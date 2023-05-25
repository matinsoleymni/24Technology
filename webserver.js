/* WEBSERVER  */
if($.URL == domin|| $.URL == domin+'#' || $.URL == domin+'index.html'){
    fetch("./assets/layouts/HomePage.html", { method: "POST" })
    .then(res => res.text())
    .then(txt => APP.innerHTML = txt);

}else if ($.URL == domin+'#Blog' || $.URl == domin+'index.html#Blog'){
    fetch("./assets/layouts/Blog.html", { method: "POST" })
    .then(res => res.text())
    .then(txt => APP.innerHTML = txt);
}else if($.URL == domin+'#login' || $.URL == domin+'index.html#login'){
    fetch('./assets/layouts/login.html')
    .then(res => res.text())
    .then(txt => APP.innerHTML= txt)
}else {
    APP.innerHTML = '403'
}

window.addEventListener('locationchange' , ()=> {
    if($.URL == domin || $.URL == domin+'#' || $.URL == domin+'index.html'){
        fetch("./assets/layouts/HomePage.html", { method: "POST" })
        .then(res => res.text())
        .then(txt => APP.innerHTML = txt);
    
    }else if ($.URL == domin+'#Blog' || $.URl == domin+'index.html#Blog'){
        fetch("./assets/layouts/Blog.html", { method: "POST" })
        .then(res => res.text())
        .then(txt => APP.innerHTML = txt);
    }else if($.URL == domin+'#login' || $.URL == domin+'index.html#login'){
        fetch('./assets/layouts/login.html')
        .then(res => res.text())
        .then(txt => APP.innerHTML= txt)
    }else if($.URL == domin+'#Products' || $.URL == domin+'index.html$Products'){
        fetch('./assets/layouts/Products.html')
        .then(res => res.text())
        .then(txt => APP.innerHTML= txt)
    }else {
        APP.innerHTML = '403'
    }
})