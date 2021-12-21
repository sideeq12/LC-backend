import React, {useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";

const LoginDetails = ()=>{
    let navigate = useNavigate();
    let direction = "login"

    // declaring the hooks
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("")
    const [User, setUser] = useState({})

    // fuction being used to update datas
    const checkEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    const checkPassword = (e)=>{
        setPassword(e.target.value)
    }
    const Test = (e)=>{
        e.preventDefault()
        if(email.includes("oauife.edu.ng")){
            if(password === "" ){
                setErrorMessage("Incorrect password")
            }else{
                direction = "dashboard"
                navigate("/dashboard")
                console.log("approved")
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