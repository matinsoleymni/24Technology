const $ = document;
let datas ;
const APP = $.querySelector('.APP');
const title = $.querySelector('.title');
const diti  = $.querySelector('.dit');
let layouts = [];
const Url = new URL($.documentURI);
const domin = Url['origin']+Url['pathname'];

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