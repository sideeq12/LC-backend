import React,{useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios"


const SignUp = ()=>{
    let navigate = useNavigate()
    let url = "http://localhost:8080/api/signup"

    
    const [fullname, setFullname] = useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [Spassword, setSpassword] = useState("")
    const [ErrorMessage, setErrorMessage]= useState("")
    const [image, setImage] = useState("empty")
    const [User, setUser] = useState({ full_name: "", 
    email : "", Faculty : "", password : "", image : "", isVerified : false, gender : "not specified", tags : ""})

    
    async function handleform(e){
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(({name})=> name == "file")
        if(fileInput.files.length ===1){
            const formData = new FormData();
            for(const file of fileInput.files){
                formData.append("file", file)
                formData.append("upload_preset", "learnersconnect")
                const data = await fetch("https://api.cloudinary.com/v1_1/starclick/image/upload",{
                    method : 'POST',
                     body : formData
                    }).then(r=> r.json())
                 User.image = data.url
            }
        }
       
    }

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
    const changeFaculty = (e)=>{
        let data = e.target.value
        User.Faculty= data
    }
    const changeGender = (e)=>{
        let data = e.target.value;
        User.gender = data
    }
    const changeTags = (e)=>{
        let data = e.target.value;
        User.tags = data;
    }
    
    const Test = (e)=>{
        e.preventDefault();
        if(fullname === ""){
            setErrorMessage("Kindly input your full name")
        }else if(email.includes("oauife.edu.ng")){
            if(password !== "" && password.length > 8){
                if(password === Spassword){
                    setErrorMessage("")
                    User.password = password
                    const Headers = {
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }
                    axios.post(url, User, Headers)
                    .then((res)=>{
                        if(res.data.result == "used"){
                                setErrorMessage("Email already been used")
                        }else{
                            const store = res.data.userData
                            console.log(store)
                            localStorage.setItem("userInfo",JSON.stringify(store))
                            navigate("/dashboard")
                        }
                        
                        })
                    .catch((err)=>{ console.log("Error response : ", err)})
                    console.log("the user is ", User)

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
    useEffect(()=>{
        if(localStorage.getItem("userInfo") !== null){
            console.log("not empty here oo")
            navigate("/dashboard")}
    })
        return(
            <div className="mainSignup">
                        <h2><span>Get started with</span> Leaner's Connect</h2>
                        <div className="error">{ErrorMessage}</div>
                        <form encType="multipart/form-data" onChange={handleform}>
                            <div className="data">
                                <label>Full name : </label>
                                <input type="text" onChange={changeName}  required/>
                            </div>
                            <div className="data">
                                <label>Student's email : </label>
                                <input type="email" onChange={changeEmail} required/>
                            </div>
                            <div className="data">
                                <label>Gender :</label>
                                <select id="gender" onChange={changeGender} required>
                                <option value="none">select</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Bisexual">Bisexual</option>
                                    <option value="Trans">Trans</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="data">
                            <label>Select Faculty:</label>
                                <select  onChange={changeFaculty} required>
                                    <option value="Faculty of Technology">Faculty of Technology</option>
                                    <option value="Faculty of Administration">Faculty of Administration</option>
                                    <option value="Faculty of Art">Faculty of Art</option>
                                    <option value="Faculty of Education">Faculty of Education</option>
                                    <option value="Faculty of Science">Faculty of Science</option>
                                    <option value="Faculty of Pharmacy">Faculty of Pharmacy</option>
                                    <option value="Faculty of Clinical science">Faculty of  Clinical science</option>
                                    <option value="Faculty of Denstistry">Faculty of Denstistry</option>
                                    <option value="Faculty of Law">Faculty of Law</option>
                                    <option value="Faculty of Medical science">Faculty of Medical science</option>
                                    <option value="Faculty of Social science">Faculty of Social science</option>
                                </select>
                            </div>
                            <div className="data skill">
                                <label>Your skill tags (seperate with comma ","): </label>
                                <input type="text" onChange={changeTags} placeholder="tag1,tag2" required/>
                            </div>
                            <div className="data">
                                <label>Uplaod profile picture</label>
                                <input type="file" accept="image/png, image/jpeg" name="file" required/>
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