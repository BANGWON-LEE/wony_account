


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

// let result_value = document.getElementById('my_price');
// let btn_price_plus = document.getElementById('btn_price_plus');
// let btn_price_minus = document.getElementById('btn_price_minus');


//account 수입과 지출 자동 + -로 하는 부분 (start)

function minus_btn() {
    let btn_price_plus = document.getElementById('btn_price_plus');
    let btn_price_minus = document.getElementById('btn_price_minus');
    let result = document.getElementById('my_price');
  
    
    btn_price_minus.style.display='inline';
    btn_price_plus.style.display='none';

    console.log('click 성공');

    result.onkeydown = function() {
        this.value *= -1;

        if(this.value > 0) {
            this.value *= -1

            return this.value
        }
    }
}

//account 수입과 지출 자동 + -로 하는 부분 (end)

function plus_btn() {
    let btn_price_plus = document.getElementById('btn_price_plus');
    let btn_price_minus = document.getElementById('btn_price_minus');
    let result = document.getElementById('my_price');

    btn_price_plus.style.display='inline';
    btn_price_minus.style.display='none';
    result.value = 0;



    result.onkeydown = function() {
        this.value * 1;

        if(this.value < 0) {
            this.value * -1

            return this.value
        }
    }

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

