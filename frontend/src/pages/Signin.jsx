import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Header } from "../components/Headers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SignIn( ){

    useEffect( ()=>{
        if(localStorage.getItem("token")){
            navigate("/dashboard");
        }
    },[])

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return <div className=" bg-customBackGround  flex items-center justify-center  h-screen">
        <div className=" bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <Header heading= {'Sign in'}/>
        <SubHeading subHeading={'Enter your information to access your account'}/>
        <InputBox label={'Email'} placeholder={'Mishra@gmail.com'} onChange={ (e)=>{
            setUsername(e.target.value)
            }} />
        <InputBox label={'Password'} placeholder={'123456'}  onChange={ (e)=>{
            setPassword(e.target.value)
            }} />
        <Button buttonName={'Sign in'} onClick={ async ()=>{

        try{
            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
            })

            if(response.data.token){

                localStorage.setItem("token","Bearer " + response.data.token)
                localStorage.setItem("username",response.data.username)
                navigate("/dashboard");
            }
            else{
                alert("Sign up failed. Please check your details and try again.");
            }
        }
        catch(error){
            alert("Sign up failed. Please check your details and try again.");
        }
        }}/>
        <BottomWarning warning={' Don\'t have an account?'} to={'/signup'} toLabel={'Sign up'}/>
        </div>
    </div>
}