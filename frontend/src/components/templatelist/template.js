import React, {useEffect} from "react";
import NavLinks from "../NavLink/navLink";
import { useNavigate } from "react-router-dom";
import "./template.css"
import SkillDB from "../dashboard/skillDB";
import Card from "../dashboard/card";


const TemplateList =()=>{

    const url = ""
    const navigate = useNavigate()
    const [check, setCheck] =useState(false)
    useEffect(()=>{
        if(localStorage.getItem("userInfo")===null){
            navigate("/login")
        }
    })
    const Headers = {
        Headers : {
            'Content-Type': 'Application/json'
        }
    }
    if(check === false){
        async function getCard() {
            axios.post(url, User, Headers).then(response =>{
                if(response.data.message === "success"){
                    const List = response.data.data
                }
         })
        }
        setCheck(true)
    }
    
    return (
        <div className="dashboardWrap">
            <NavLinks /> 
          
            <div className="skillWrap">
                <div className="skill"> 
                <h2>Latest skill template List</h2>
                <div className="searchSection">
                    <input type="text" placeholder="search for skill..." required /> <button>Search</button>
                </div>
                <div className="latest">
                <h3>skills offer list </h3>
                <div className="cardList">
                {SkillDB.map((data)=><Card image={data.image} key={data.id} text={data.Text} price={data.amount}/>)}
                </div>
            </div></div>
            </div>
            
            </div>
    )
}

export default TemplateList;