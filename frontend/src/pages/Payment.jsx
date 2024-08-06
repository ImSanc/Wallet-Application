import { useEffect } from "react";
import { Amount } from "../components/Amount";
import { Header } from "../components/Headers";
import { SendTo } from "../components/SendTo";
import { useNavigate } from "react-router-dom";

export function Payment(){

    const navigate = useNavigate();

    useEffect( ()=>{
        const token = localStorage.getItem("token");

        if(!token){
            navigate("/signin");
        }
    },[])

    return (
        <div className="bg-gray-100 flex justify-center w-screen h-screen ">
            <div className=" bg-white border-2 rounded-lg shadow-md w-[80%] h-[60%] mt-[10%] sm:w-[50%] lg:w-[3 0%]">
                <Header  heading={"Send Money"}></Header>
                <SendTo user={ {firstName : "sanchit" , lastName : "mishra"} }></SendTo>
                <Amount buttonName={"Initiate Transfer"}></Amount>
            </div>
        </div>
    )
}