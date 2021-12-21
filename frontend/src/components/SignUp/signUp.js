import React,{useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";


const SignUp = ()=>{
    let navigate = useNavigate()
    
    const [fullname, setFullname] = useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [Spassword, setSpassword] = useState("")
    const [ErrorMessage, setErrorMessage]= useState("")
    const [User, setUser] = useState({})

    const changeName = (e)=>{
        let data = e.target.value
        setFullname(data)
    }
    const changeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const changePassword = (e)=>{
        setPassword(e.target.value)
    }
    const changeSpassword = (e)=>{
        setSpassword(e.target.value)
        console.log(Spassword)
    }

    const Test = (e)=>{
        e.preventDefault();
        if(fullname === ""){
            setErrorMessage("Kindly input your full name")
        }else if(email.includes("oauife.edu.ng")){
            if(password !== ""){
                if(password === Spassword){
                    let Details = {
                        full_name : fullname,
                        Email : email,
                        password : password
                    }
                    setUser(Details)
                    console.log(User)
                    navigate("/verification")

            }else{
                setErrorMessage("Password not Match!")
            }
            }else{
                setErrorMessage("kindly input a valid password")
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
                            <input type="password" onChange={changePassword} required/>
                        </div>
                        <div className="data">
                            <label>Confirm Password : </label>
                            <input type="password" onChange={changeSpassword}  required/>
                        </div>
                        <button value="" type="submit" className="btn" onClick={Test}>Create an account</button>
                    </form>
                    <div className="text">Already have an account ? <Link to="/login"> Login here</Link></div>
                </div>
    )
}

export default SignUp;