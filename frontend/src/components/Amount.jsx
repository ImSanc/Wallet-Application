

export function Amount({onClick}){
    return (
        <div>
            <div className=" flex justify-start p-1">
                Amount (In Rs)
            </div>
            <div>
                <input placeholder="Enter amount" type="text" className="w-full rounded-md border-2 p-2 my-2"></input>
            </div>
            <div>
                <button onClick={onClick} type="button" className=" mt-2 w-full text-white bg-green-500 hover:bg-green-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{buttonName}</button>
            </div>
        </div>
    )
}