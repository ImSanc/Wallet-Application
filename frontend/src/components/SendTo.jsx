export function SendTo({user}){

    const firstName = user.firstName || " ";
    const lastName = user.lastName || " ";

    return <div className="flex justify-start just mt-20 justify-items-center">
            <div className="ml-10  bg-green-500 flex justify-center justify-items-center w-10 h-10 rounded-full text-white">
                <div className=" mt-1 flex justify-center justify-items-center text-xl">
                    {firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex justify-center justify-items-center text-xl font-semibold pt-1">
                <div className="flex px-2 justify-items-center">
                    {firstName[0].toUpperCase() + firstName.slice(1,firstName.length)}
                </div>
                <div className="flex justify-items-center">
                    {lastName[0].toUpperCase() + lastName.slice(1,lastName.length)}
                </div>
            </div>
    
    </div>
}