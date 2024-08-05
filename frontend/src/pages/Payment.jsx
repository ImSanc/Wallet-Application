import { Amount } from "../components/Amount";
import { Header } from "../components/Headers";
import { SendTo } from "../components/SendTo";

export function Payment(){
    return (
        <div className="bg-gray-100 flex justify-center w-screen h-screen">
            <div className=" bg-white border-2 rounded-lg shadow-md w-[30%] h-[60%] mt-[10%]">
                <Header  heading={"Send Money"}></Header>
                <SendTo user={ {firstName : "sanchit" , lastName : "mishra"} }></SendTo>
                <Amount buttonName={"Initiate Transfer"}></Amount>
            </div>
        </div>
    )
}