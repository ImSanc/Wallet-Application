export function Balance({balance}){
    return (
        <div className="flex  mx-4 my-2 font-semibold justify-between py-6 px-4 bg-blue-300 rounded-lg">
            <div className="flex ">
                <div className="font-bold">
                     Your Balance
                </div>
                <div className="px-2 underline">
                     Rs {balance}
                 </div>
            </div>
            <div className=" hover:opacity-50 cursor-pointer underline">
                Offers
            </div>
        </div>
    )
}