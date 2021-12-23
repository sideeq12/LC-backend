import React, {useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios"

const LoginDetails = ()=>{
    let navigate = useNavigate();
    let url = "http://localhost:8080/app/user"

    // declaring the hooks
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("")
    const [User, setUser] = useState({email : "", password : ""})

    // fuction being used to update datas
    const checkEmail = (e)=>{
        let data = e.target.value
        setEmail(data)
        User.email = data
    }
    const checkPassword = (e)=>{
        let data = e.target.value
        setPassword(data)
        User.password = data
    }
    const Test = (e)=>{
        e.preventDefault()
        if(email.includes("oauife.edu.ng")){
            if(password === " " || password.length < 8){
                setErrorMessage("password must exceed 8 characters")
            }else{
                const Headers = {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
                axios.post(url,User,Headers)
                .then((data)=>{
                    let message = data.data.message;
                    if(message === "correct"){
                            navigate("/dashboard")
                    }else if(message === "user_not_found"){
                            setErrorMessage("Email not found!")
                    }else{
                            setErrorMessage("Incorrect password")
                    }
                })
                .catch((err)=>{console.log("error in connection")})
            }
        }else{
            setErrorMessage("Kindly provide valid OAU student's mail")
            navigate("/login")
        }
    }

    
    return(
        <div className="login">
            <h2>Welcome Back</h2>
            <h4>Login to your account </h4>
            <div className="error">{ErrorMessage}</div>
        <form>
            <label>Email address :</label> <br/>
            <input type="email" placeholder="example@oauife.edu.ng" onChange={checkEmail} required/> <br/>
            <label>Password : </label> <br/>
            <input type="password" placeholder="******" onChange={checkPassword} required/> <br/>
            <button type="submit" value="submit" onClick={Test}>Login</button>
        </form>
         Don't have an account ?  <Link to="/signup">Sign up here </Link>
        </div>
    )
}

export default LoginDetails;