import { Link } from "react-router-dom";

export function User({user,currentUser}) {
    return (
        <div className="flex justify-between flex-row justify-items-center p-2">
            <div className="flex mx-2 flex-row">
                <div className="bg-slate-300 rounded-full font-medium flex justify-items-center justify-center h-10 w-10 ">
                    <div className="flex justify-items-center justify-center pt-1  text-xl">
                        {user.firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className="flex flex-row justify-center justify-items-center  px-2 py-2" >
                    <div>
                        { user.firstName[0].toUpperCase() + user.firstName.slice(1,user.firstName.length)} {user.lastName}
                    </div>
                </div>
            </div>

                <Link to={`/sendmoney?user=${currentUser}&toUser=${user.username}`} className=" flex justify-center justify-items-center bg-slate-800 text-white rounded-md py-2 px-4 w-25 hover:bg-black">
                    Send Money
                </Link> 

        </div>
    );
}
