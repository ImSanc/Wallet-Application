import { useEffect, useState } from "react";
import { Amount } from "../components/Amount";
import { Header } from "../components/Headers";
import { SendTo } from "../components/SendTo";
import {  useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export function Payment(){

    
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const userParam = searchParams.get('user');
    const toUserParam = searchParams.get('toUser');

    const [user,setUser] = useState({
        firstName : "",
        lastName : ""
    });
    

    useEffect( ()=>{


        if(!token){
            navigate("/signin");
            return;
        }
        else if(username !==userParam){
            navigate("/dashboard");
            return;
        }

         axios.get("http://localhost:3000/api/v1/user/userDetails",{
            headers : {
                'Authorization' : token,
                'username' : toUserParam
            }
        })
        .then( (response)=>{
            setUser(response.data.user);
        })
        .catch((error) => {
            console.error("Error fetching user details:", error);
          });

    },[])

    return (
        <div className="bg-gray-100 flex justify-center items-center w-screen h-screen ">
            <div className=" bg-white border-2 rounded-lg shadow-md w-[80%] h-[60%] p-1 sm:w-[50%] lg:w-[30%]">
                <Header  heading={"Send Money"}></Header>
                <SendTo user={ user }></SendTo>
                <Amount token={token} buttonName={"Initiate Transfer"}  sender={userParam} receiver={toUserParam}></Amount>
            </div>
        </div>
    )
}