function sendmail(){
    let params={
        from_name : document.getElementById("from_name").value,
        reason : document.getElementById("reason").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }
    console.log(params,"==params");
    
    emailjs.send("service_oml7e6f","template_ysn5jxm",params).then(alert('Email sent!!!'))
    
}