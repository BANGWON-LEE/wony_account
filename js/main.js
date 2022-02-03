


function content() {

    let write_area = document.getElementById("write_account");
    let close_btn = document.getElementById("write_btn_close");
    let open_btn = document.getElementById("write_btn_detail");

    write_area.style.display='block';
    close_btn.style.display='block';
    open_btn.style.display='none'; 

}

function close_content(){

    let write_area = document.getElementById("write_account");
    let close_btn = document.getElementById("write_btn_close");
    let open_btn = document.getElementById("write_btn_detail");

    open_btn.style.display='inline-block'; 
    write_area.style.display='none';
    close_btn.style.display='none';
}

function register_data() {
 
    // console.log('시도 start');
    let form = document.getElementById('register_form');
    let account_title = document.getElementById('account_title').value;
    let datepicker = document.getElementById('datepicker').value;
    let account_content = document.getElementById('account_content').value;
    let my_price = document.getElementById('my_price').value;
    
    
    let getUser = sessionStorage.getItem("users");
    let user_id = JSON.parse(getUser)[0];
    
    let info = [user_id,datepicker, account_title,  account_content, my_price ];

    form.setAttribute('action', 'http://localhost:5001/api/account');
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
    
    document.body.appendChild(form);
    form.submit();
    
}

function minus_btn() {
    let minus = document.getElementById('btn_price_minus');
    let plus = document.getElementById('btn_price_plus');
    let result_value = document.getElementById('my_price').value;

    let tmp = '';
    
    minus.style.display='inline';
    plus.style.display='none';
    tmp += '-'
    result_value = tmp;


}

// 금액 버튼 누르면 - 값 나오도록 하기 2022/02/03


// var autoHypenPhone = function(str){
//     str = str.replace(/[^0-9]/g, '');
//     var tmp = '';
//     if( str.length < 4){
//         return str;
//     }else if(str.length < 7){
//         tmp += str.substr(0, 3);
//         tmp += '-';
//         tmp += str.substr(3);
//         return tmp;
//     }else if(str.length < 11){
//         tmp += str.substr(0, 3);
//         tmp += '-';
//         tmp += str.substr(3, 3);
//         tmp += '-';
//         tmp += str.substr(6);
//         return tmp;
//     }else{              
//         tmp += str.substr(0, 3);
//         tmp += '-';
//         tmp += str.substr(3, 4);
//         tmp += '-';
//         tmp += str.substr(7);
//         return tmp;
//     }

//     return str;
// }


// var phoneNum = document.getElementById('phoneNum');

// phoneNum.onkeyup = function(){
// console.log(this.value);
// this.value = autoHypenPhone( this.value ) ;  
// }











function plus_btn() {
    let minus = document.getElementById('btn_price_minus');
    let plus = document.getElementById('btn_price_plus');
    let result_value = document.getElementById('my_price');

    minus.style.display='none';
    plus.style.display='inline';
    result_value.style.hyphens = 'none';

}


function history_data() {
 
    // console.log('시도 start');
    let form = document.createElement('form');
    let firtsDate = document.getElementById('datepicker1').value;
    let secondDate = document.getElementById('datepicker2').value;
    
    
    let info = [firtsDate, secondDate ];

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

