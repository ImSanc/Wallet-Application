export function Appbar({username})
{
    return <div className="flex justify-between border-b-1 shadow-sm h-14">
        <div className="flex flex-col justify-center h-full ml-4">
            Wallet App
        </div>
        <div className=" flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div>
                <div className=" bg-slate-500 rounded-full text-black">
                    {username.charAt(0)}
                </div>
            </div>
        </div>
    </div>
}