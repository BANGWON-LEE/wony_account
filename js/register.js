function userRegister() {
 
    console.log('시도 start');
    let form = document.createElement('form');
    let mem_id = document.getElementById('register_id').value;
    let mem_pw = document.getElementById('pass_text').value;
    let mem_name = document.getElementById('register_name').value;

    let info = [mem_id, mem_pw, mem_name ];

    alert('회원가입 성공');
    form.setAttribute('action', 'http://localhost:5001/api/register');
    form.setAttribute('method', 'post');
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
    
    document.body.appendChild(form);
    
    form.submit();
    
    
}