import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../NavLink/navLink";
import  axios  from "axios";
import "./newskill.css"


const NewSkill =()=>{
    const url = "http://localhost:8080/api/cards"
    const navigate = useNavigate()
    const [error, setError]= useState("")
    const [card, setCard ] = useState({
        uploader_email : "",
        description : "",
        image : "",
        price : "Free",
        social_link : ""
    })
    
    useEffect(()=>{
        if(localStorage.getItem("userInfo") === null){
            navigate("/login")
        }else{
            const store = localStorage.getItem("userInfo")
            let email_store = JSON.parse(store).email
            card.uploader_email = email_store
        }
    })
    const handlingDescription = (e)=>{
        let data = e.target.value;
        card.description = data;
    }
    const handleSocial = (e)=>{
        let data = e.target.value;
        card.social_link = data
    }
    const handlePrice = (e)=>{
        let data = e.target.value;
        card.price = data

    }
    async function sendData(e){
        e.preventDefault()
        if(card.description !== ""){
            if(card.social_link !== ""){
                const form = e.currentTarget
        const fileInput = Array.from(form.elements).find(({name}) => name == "file")
        if(fileInput.files.length ===1){
            const formData = new FormData();
            for(const file of fileInput.files){
                formData.append("file", file)
                formData.append("upload_preset", "cardList")
                const data = await fetch("https://api.cloudinary.com/v1_1/starclick/image/upload",{
                    method : 'POST',
                     body : formData
                    }).then(r=> r.json())
                 card.image = data.url
                 if(card.image !== ""){
                     const Headers = {
                         headers : {
                             'Content-Type' : "application/json"
                         }
                     }
  
                     axios.post(url, card, Headers)
                     .then((res)=>{console.log(res)})
                     .catch((err)=> console.log("error exist"))
                 }
            }
        }else{
            setError("please provide an image")
        }

            }else{
                setError("Please provide socail link")
            }

        }else{
            setError("Title cannot be blank")
        }
    }
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
            <div className="FileWrap">
                <div className="fileCover">
                    <h2>Create a new skill Card</h2>
                    <div className="error">{error}</div>
                    <form encType="multipart/form-data" onSubmit={sendData}>
                        <div className="inputCover">
                            <label>Title :</label> <br/>
                            <input type="text" maxLength = "50" placeholder="I will teach how to ..." onChange={handlingDescription}  required/>
                        </div>
                        <div className="inputCover">
                            <label>Social media:</label> <br/>
                            <input type="text" placeholder="e.g whatsApp link" onChange={handleSocial} required/>
                        </div>
                        <div className="inputCover file">
                            <label>choose image</label> <br/>
                            <input type="file"  accept="image/png, image/jpeg" name="file" className="file"/>
                        </div>
                        <div className="inputCover price">
                            <label>Price :</label> 
                            <select onChange={handlePrice}>
                                <option value="₦5,000">₦5,000</option>
                                <option value="₦4,000">₦4,000</option>
                                <option value="₦3,000">₦3,000</option>
                                <option value="₦2,500">₦2,500</option>
                                <option value="₦2,000">₦2,000</option>
                                <option value="₦1,500">₦1,500</option>
                                <option value="Free">Free</option>
                            </select>
                        </div>
                        <button type="submit">Post template</button>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default NewSkill;