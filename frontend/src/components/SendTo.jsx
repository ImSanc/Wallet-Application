export function SendTo({user}){
    console.log(user);
    return <div className="flex justify-start just mt-20 justify-items-center">
            <div className="ml-10  bg-green-500 flex justify-center justify-items-center w-10 h-10 rounded-full text-white">
                <div className=" mt-1 flex justify-center justify-items-center text-xl">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex justify-center justify-items-center text-xl font-semibold pt-1">
                <div className="flex px-2 justify-items-center">
                    {user.firstName[0].toUpperCase() + user.firstName.slice(1,user.firstName.length)}
                </div>
                <div className="flex justify-items-center">
                    {user.lastName[0].toUpperCase() + user.lastName.slice(1,user.lastName.length)}
                </div>
            </div>
    
    </div>
}