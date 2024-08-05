export function Balance({balance}){
    return (
        <div className="flex w-full mx-4 font-semibold justify-start py-6 px-4">
            <div className="font-bold">
                Your Balance
            </div>
            <div className="px-2 underline">
                Rs {balance}
            </div>
        </div>
    )
}