import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Appbar({username})
{
    const navigate = useNavigate();
    
    return <div className="flex justify-between border-b-1 shadow-md h-14 px-3">
        <div className="flex flex-col justify-center h-full  font-medium">
            Wallet App
        </div>
        <div className=" flex">
            <div className="flex flex-col justify-center h-full font-medium ">
                Hello
            </div>
            <div>
                <div className="m-2 bg-slate-300 rounded-full font-semibold flex w-10 h-10 justify-items-center justify-center">
                    <div className="flex items-center text-black pb-1 text-2xl ">
                    {username.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
            <Button buttonName={"Log out"} onClick={()=>{
                localStorage.removeItem("token")
                localStorage.removeItem("username")
                navigate("/signin");
            }}></Button>
        </div>
    </div>
}