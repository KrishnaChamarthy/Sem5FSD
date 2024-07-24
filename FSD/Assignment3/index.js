$('#btn').on('click', function(event) {
    event.preventDefault();
    let username = $('#username-input').val();
    let email = $('#email-input').val();
    let password = $('#password-input').val();
    let confirm_password = $('#confirm-password-input').val();
    let mobile = $('#mobile-input').val();

    let output = $('#output');
    
    if (!username || !email || !password || !confirm_password || !mobile) {
        output.text('Fields Empty');
        return;
    }
    if (mobile.length != 10 || !/^\d+$/.test(mobile)){
        output.text('Mobile No. Error');
        return;
    }    
    if (password.length <= 7 || !/^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/.test(password)){
        output.text('Password Error');
        return;
    }
    if (confirm_password !== password){
        output.text('Confirm Password Error');
        return;
    }
    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        output.text('Email Error');
        return;
    }
    output.text('Logged In Successfully');
    return;
});