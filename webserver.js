const $ = document;
const ROOT = $.querySelector('.ROOT')
const APP = $.querySelector('.APP')

const Router = {
    "/Blog": {
        template: "Blog.html",
        title: "Hello",
        metaTags: "",
        APP:true
    }
}

document.addEventListener('click' , (e)=> {
    if(!e.target.className.includes("route")){return false}
    e.preventDefault();
    window.history.pushState({} , "" , e.target.href);
    handler()

})

document.addEventListener('load' , handler())

async function handler(){
    const route = Router[window.location.pathname];
    if(!route){
        generate(404 , {APP:true});
    }
    await fetch(route.template).then((res) => res.text()).then(data => generate(data , route))
}

function generate(d , r){
    if(r.APP){
       APP.innerHTML = d
    }else if(r.ROOT){
        ROOT.innerHTML = d
    }
}