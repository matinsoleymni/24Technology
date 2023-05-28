function configForms(e){
    let name     = e.target[0].value
    let username = e.target[1].value
    let password = e.target[2].value 
    fetch(`./php/Insert.php?name=${name}&username=${username}&pass=${password}`)
    .then(res => res.text())
    .then(txt => console.log(txt))
    e.preventDefault();
}
