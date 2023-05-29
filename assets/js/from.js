function configForms(e){
    let data = [];
    let name     = e.target[0].value
    let username = e.target[1].value
    let password = e.target[2].value
    let token    = 2466624666;
    fetch(`./php/Insert.php?name=${name}&username=${username}&pass=${password}&tk=${token}`)
    .then(res => res.text())
    .then(txt => data.push(txt))
    e.preventDefault();
    setTimeout(()=> {
        if(data[0] == 'true'){
            alert('your login was seccsfully');
            $.URL == domin+'#';
        }else if(data[0] == 'no') {
            alert('TK - ERROR')
        }else if(data[0] == 'false'){
            alert('Try agin later')
        }else {
            alert('ERROR Not Find')
        }
        console.log(data[0]);
    }, 100)
}
