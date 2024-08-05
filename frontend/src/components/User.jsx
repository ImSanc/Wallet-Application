import { Link } from "react-router-dom";
import { Button } from "./Button";

export function User({user}) {
    return (
        <div className="flex justify-between flex-row justify-items-center p-2">
            <div className="flex mx-2 flex-row">
                <div className="bg-slate-300 rounded-full font-medium flex justify-items-center justify-center h-10 w-10 ">
                    <div className="flex justify-items-center justify-center p-1  text-xl">
                        {user.firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className="flex flex-row justify-center justify-items-center  px-2 py-2" >
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

                <Link to={"/sendMoney"} className=" flex justify-center justify-items-center bg-black text-white rounded-md py-2 px-4 w-25 hover:opacity-50">
                    Send Money
                </Link> 

        </div>
    );
}
