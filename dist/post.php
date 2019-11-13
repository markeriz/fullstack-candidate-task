<?php

    header('Content-Type: application/json');

    if(isset($_POST['email']) && isset($_POST['password']))
    {
        $email = $_POST['email'];
        $password = $_POST['password'];

        if(validateEmail($email) && validatePassword($password))
        {
            if($email === 'imfullstack@imawesome.com' && $password === 'cool')
            {
                echo json_encode(['successMsg' => 'Greeting from PHP!']);
            }
            else
            {
                echo json_encode('Invalid credentials!');
            }
        }
        
    }
    else
    {
        echo json_encode('Not get email and password inputs!');
    }

    function validateEmail($mail)
    {
        if(strlen($mail) < 4)
        {
            echo json_encode('Email must be more than 4!');
            return false;
        }

        if (!filter_var($mail, FILTER_VALIDATE_EMAIL))
        {
            echo json_encode('Email not valid!');
            return false;
        }

        return true;
    }

    function validatePassword($pass)
    {
        if(strlen($pass) < 4)
        {
            echo json_encode('Password length must be more than 4!');
            return false;
        }

        return true;
    }