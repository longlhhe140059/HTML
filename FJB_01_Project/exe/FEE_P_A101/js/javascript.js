function checklogin(){
    let email = document.forms['login-form'].email.value
    let password = document.forms['login-form'].password.value
    
    if(email === ''){
        const errorAccount = createErrorElement('email is empty')
        document.getElementById('email-container').appendChild(errorAccount)
    }
    return false
}

function createErrorElement(msg){
    const e = document.createElement("div");
    e.setAttribute("class","errorMSG")
    e.innerHTML=msg
}