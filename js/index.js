function userLogin() {
 
    // console.log('시도 start');
    let form = document.createElement('form');
    let mem_id = document.getElementById('login_id').value;
    let mem_pw = document.getElementById('login_pw').value;
    
    
    let info = [mem_id, mem_pw ];

    form.setAttribute('action', 'http://localhost:5001/api/login');
    form.setAttribute('method', 'get');
    document.characterSet="utf-8";
    
    for(let key in info) {
        let hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", info[key]);
        console.log(key);
        console.log(info[key]);
        form.appendChild(hiddenField);
    }
    
    sessionStorage.setItem("users", JSON.stringify(info));
    document.body.appendChild(form);
    form.submit();
    
}