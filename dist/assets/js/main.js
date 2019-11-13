function submitForm() {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if(validateEmail(email) && validatePassword(password))
    {
        $.ajax({
            url: 'post.php', // or other API link
            type: 'post',
            dataType: 'json',
            data: {
                email: email,
                password: password
            },
            success: function (response) {
                if(response.successMsg != undefined)
                {
                    alertOpen(response.successMsg, 'success');
                }
                else
                {
                    alertOpen(response, 'danger');
                }
            }
        })
    }
}

function onPressKeyInput()
{
    var alert = document.getElementById('alert');
    alert.classList.remove('open');
}

function validateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }

    if(!mail.length >= 4)
    {
        alertOpen('Email length must be more than 4!');
        return (false);
    }

    alertOpen('Not valid email!');

    return (false)
}

function validatePassword(pass) 
{
    if (pass.length >= 4) {
        return (true)
    }
    
    alertOpen('Password length must be more than 6!');
    
    return (false)
}

function alertOpen(msg, success = null)
{
    var alert = document.getElementById('alert');
    alert.innerHTML = msg;
    if(success == null || success == 'danger')
    {
        alert.classList.add('alert-danger');
        alert.classList.add('open');
    }
    else if(success == 'success')
    {
        alert.classList.add('alert-success');
        alert.classList.add('open');
    }
    else
    {
        alert.classList.add('alert-info');
        alert.classList.add('open');
    }

    console.log(msg);
    
}