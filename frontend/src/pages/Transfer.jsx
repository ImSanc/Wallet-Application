import { useEffect } from "react";
import { TransferStatus } from "../components/TransferStatus";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Transfer( ){

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const transferStatus = searchParams.get('success') === 'true';
    console.log(transferStatus);
    
    useEffect( ()=>{
        const token = localStorage.getItem("token");
        if( !token ){
            navigate("/dashboard");
        }
    },[]);

    return (
        <div>
            <TransferStatus success={transferStatus}></TransferStatus>
        </div>
    )
}