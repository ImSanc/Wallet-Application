import { useEffect, useState } from "react";
import { Amount } from "../components/Amount";
import { Header } from "../components/Headers";
import { SendTo } from "../components/SendTo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Payment(){

    const [user,setUser] = useState({
        firstName : "",
        lastName : ""
    });
    const navigate = useNavigate();

    useEffect( ()=>{
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");

        if(!token){
            navigate("/signin");
            return;
        }

        axios.get("http://localhost:3000/api/v1/user/userDetails",{
            headers : {
                'Authorization' : token,
                'username' : username
            }
        })
        .then( (response)=>{
            setUser(response.data.user);
        })

    },[])

    return (
        <div className="bg-gray-100 flex justify-center w-screen h-screen ">
            <div className=" bg-white border-2 rounded-lg shadow-md w-[80%] h-[60%] mt-[10%] sm:w-[50%] lg:w-[3 0%]">
                <Header  heading={"Send Money"}></Header>
                <SendTo user={ user }></SendTo>
                <Amount buttonName={"Initiate Transfer"}></Amount>
            </div>
        </div>
    )
}