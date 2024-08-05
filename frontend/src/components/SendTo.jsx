export function SendTo({user}){
    return <div className="flex justify-items-start">
        <div>
            <div className=" bg-green-500 flex justify-center justify-items-center w-10 h-10 rounded-full text-white">
                <div className="flex justify-center justify-items-center text-xl">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex justify-center justify-items-center text-xl font-semibold ">
                <div>
                    user.firstName
                </div>
                <div>
                    user.lastName
                </div>
            </div>
        </div>
    </div>
}