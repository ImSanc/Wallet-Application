

export function Amount({onClick,buttonName}){
    return (
        <div className=" mx-10 ">
            <div className=" flex justify-start p-1 font-medium">
                Amount (In Rs)
            </div>
            <div>
                <input placeholder="Enter amount" type="text" className="w-full rounded-md border-2 p-2 my-2"></input>
            </div>
            <div className=" mt-auto">
                <button onClick={onClick} type="button" className=" mt-2 w-full text-white bg-green-500 hover:bg-slate-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{buttonName}</button>
            </div>
        </div>
    )
}