import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";


export function Amount({token,buttonName,sender,receiver}){

    const [amount,setAmount] = useState(0);
    const navigate = useNavigate();

    async function transferAmount(){

        if( amount == 0  ){
            alert("Please enter an amount!!")
        }

        const response = await axios.post('http://localhost:3000/api/v1/account/transfer',{
            username : sender,
            to : receiver,
            amount : parseInt(amount)
        },{ headers : {
            'Authorization' : token,
            'username' : sender
        }})

        navigate(`/transfer?=${response.data.success}`)
        
    }
    return (
        <div className=" mx-10 ">
            <div className=" flex justify-start p-1 font-medium">
                Amount (In Rs)
            </div>
            <div>
                <input placeholder="Enter amount" type="text" className="w-full rounded-md border-2 p-2 my-2" onChange={
                    (e) => { setAmount(e.target.value)
                }}></input>
            </div>
            <div className=" mt-auto">
                <button onClick={transferAmount} type="button" className=" mt-2 w-full text-white bg-green-500 hover:bg-slate-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{buttonName}</button>
            </div>
        </div>
    )
}