// function userRegister() {
 
//     console.log('시도 start');
//     let form = document.createElement('form');
//     let mem_id = document.getElementById('register_id').value;
//     let mem_pw = document.getElementById('pass_text').value;
//     let mem_name = document.getElementById('register_name').value;
    
//     let info = [mem_id, mem_pw, mem_name ]
    
//     // form.append(mem_id);
//     // form.append(mem_pw);
//     // form.append(mem_name);
//     alert('회원가입 성공');
//     form.setAttribute('action', 'http://localhost:5001/api/register');
//     form.setAttribute('method', 'post');

//     document.characterSet="utf-8";
    
//     let hiddenField = document.createElement('input');
//     for(key in info) {
//         hiddenField.setAttribute('type', 'hidden');
//         hiddenField.setAttribute("name", key);
//         console.log(key);
//         hiddenField.setAttribute("value", info[key]);
//         console.log(info[key]);
//         form.append(hiddenField);
//     }
//     let u =hiddenField.getAttribute("value")

//     //console.log(form.hiddenField.getAttribute("value"));
//     document.body.append(form);
//     form.submit();
    
// }

function userRegister() {
    alert('가입성공');
    //location.href='index.html'
}