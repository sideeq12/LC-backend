import React,{useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios"


const SignUp = ()=>{
    let navigate = useNavigate()
    let url = "http://localhost:8080/app/signup"
    
    const [fullname, setFullname] = useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [Spassword, setSpassword] = useState("")
    const [ErrorMessage, setErrorMessage]= useState("")
    const [User, setUser] = useState({ full_name: "", email : "", password : ""})

    const changeName = (e)=>{
        let data = e.target.value
        setFullname(data)
        User.full_name = data
    }
    const changeEmail = (e)=>{
        let data = e.target.value
        setEmail(data)
        User.email = data
    }
    const changePassword = (e)=>{
        setPassword(e.target.value)
    }
    const changeSpassword = (e)=>{
        setSpassword(e.target.value)
    }

    const Test = (e)=>{
        e.preventDefault();
        if(fullname === ""){
            setErrorMessage("Kindly input your full name")
        }else if(email.includes("oauife.edu.ng")){
            if(password !== "" && password.length > 8){
                if(password === Spassword){
                    User.password = password
                    console.log("Connection initiated")
                    console.log(User)
                    const Headers = {
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }
                    axios.post(url, User, Headers)
                    .then((res)=>{ console.log("Response : ", res)})
                    .catch((err)=>{ console.log("Error response : ", err)})
                    console.log("the user is ", User)

                    // navigate("/verification")

            }else{
                setErrorMessage("Password not Match!")
            }
            }else{
                setErrorMessage("Password must exceed 8 characters")
            }
        }else{
                setErrorMessage("Kindly input a valid OAU student's mail")
        }
        
    }
    return(
        <div className="mainSignup">
                    <h2><span>Get started with</span> Leaner's Connect</h2>
                    <div className="error">{ErrorMessage}</div>
                    <form>
                        <div className="data">
                            <label>Full name : </label>
                            <input type="text" onChange={changeName}  required/>
                        </div>
                        <div className="data">
                            <label>Student's email : </label>
                            <input type="email" onChange={changeEmail} required/>
                        </div>
                        <div className="data">
                            <label>Password : </label>
                            <input type="password" onChange={changePassword} minLength="8" required/>
                        </div>
                        <div className="data">
                            <label>Confirm Password : </label>
                            <input type="password" onChange={changeSpassword} minLength="8" required/>
                        </div>
                        <button value="" type="submit" className="btn" onClick={Test}>Create an account</button>
                    </form>
                    <div className="text">Already have an account ? <Link to="/login"> Login here</Link></div>
                </div>
    )
}

export default SignUp;