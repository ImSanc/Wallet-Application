export function Appbar({username})
{
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
                    <div className="flex items-center text-black pb-2 text-2xl ">
                    {username.charAt(0)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}