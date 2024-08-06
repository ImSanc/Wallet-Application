import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export  function Dashboard(){

    const [user,setUser] = useState("");
    const [balance,setBalance] = useState(0);
    const navigate = useNavigate();

    useEffect( ()=>{

        const username = localStorage.getItem("username");
        const token = localStorage.getItem("token");

        if(!token){
            navigate("/signin");
        }


        axios.get("http://localhost:3000/api/v1/user/userDetails",{
            headers : {
                'Authorization' : token,
                'username' : username
            }
        })
        .then( (response)=>{
            setUser(response.data.user.firstName);
        })

       

        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : {
                'Authorization' : token,
                'username' : username
            }
        })
        .then( (response)=>{
            setBalance(response.data.balance);
        })

        console.log(user,balance);
    },[])

    return (
        <div>
            <Appbar username={user}/>
            <Balance balance={balance}/>
            <Users/>
        </div>
    )
}