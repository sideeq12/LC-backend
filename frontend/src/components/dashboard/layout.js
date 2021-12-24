import React, {useEffect, useState} from "react";
import "./layout.css"
import Avatar from "./avatar.jpg"
import DB from "./skillDB"
import Card from "./card";
import axios from "axios"


const DashboardLayout = ()=>{
    let image = "https://avatarfiles.alphacoders.com/210/thumb-1920-210881.jpg";
    const url = "http://localhost:8080/api/dashboard"

    const [userDetails, setUserDetails] = useState({
        image : "",
        full_name :"",
        Faculty : "",
        description : "",
        email : "",
        Gender : "",
        tags : "",
    })
    const email = JSON.parse(localStorage.getItem("userInfo")).email
    const User = {
        email : email
    }
    const Headers = {
        Headers : {
            'Content-Type': 'Application/json'
        }
    }

    console.log(User)
    async function userData(){
      await  axios.post(url, User, Headers).then(response=>{
            if(response.data.message === "success"){
                setUserDetails(response.data.data)
            }
        }   )    
    }

    userData()
    console.log(userDetails)

    return (
        <div className="layout">
            <div className="userDetails">
                <img src={image} alt="user avatar" />
                <p>
                    <b>{userDetails.full_name}</b>
                    <quote>Conputer Science</quote>
                    <em>Unique Pen</em>
                </p>
            </div>
            <div className="tagsection">
                <div className="tagList">
                    <h2>Skills and Tags</h2>
                    <p>
                    <em>Catering services</em>
                    <em>Catering services</em>
                    <em>Catering services</em>
                    <em>Catering services</em>
                    <em>Catering services</em>
                    </p>
                </div>
                <div className="aboutTag">
                    <h2>About</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    </p>
                </div>
            </div>
            <div className="skillList">
                {DB.map((data)=><Card image={data.image} key={data.id} text={data.Text} price={data.amount} />)}
            </div>
        </div>
    )
}

export default DashboardLayout;