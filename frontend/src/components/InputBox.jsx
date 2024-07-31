export function InputBox( {label ,placeholder}){
    return <div>
        <div className=" font-medium text-left p-1">
            {label}
        </div>
        <input  className=" border-2 rounded-md p-2 w-full ml-1" type="text" placeholder ={placeholder} ></input>
    </div>
}