import React, {useEffect, useState} from "react";
import "./layout.css"
import Card from "./card";
import axios from "axios"


const DashboardLayout = ()=>{
    const url = "https://learnersconnect.herokuapp.com/api/dashboard"
    const url2 = "https://learnersconnect.herokuapp.com/api/cardList"

        const [count, setCount] = useState(true)
        const [cardList, setCardList] = useState([])
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

    if(count === true){
        function userData(){
            axios.post(url, User, Headers).then(response=>{
                 if(response.data.message === "success"){
                     setUserDetails(response.data.data)
                 }
             }   )  
              axios.post(url2, User, Headers).then(response =>{
                    if(response.data.message === "success"){
                        const List = response.data.data
                            setCardList(List)
                    }
             })  
             
         }
         userData()
             setCount(false)
    }
    

  
    let skills = userDetails.tags.split(",")

    return (
        <div className="layout">
            <div className="userDetails">
                <img src={userDetails.image} alt="user avatar" />
                <p>
                    <b>{userDetails.full_name}</b>
                    <em>{userDetails.email}</em>
                    <quote>{userDetails.Faculty}</quote>
                </p>
            </div>
            <div className="tagsection">
                <div className="tagList">
                    <h2>Skills and Tags</h2>
                    <p>
                    {skills.map(skill => <em>{skill}</em>)}
                    
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
                {cardList.map((data)=><Card image={data.image} key={data._id} text={data.description} price={data.price} link={data.social_link} />)}
            </div>
        </div>
    )
}

export default DashboardLayout;