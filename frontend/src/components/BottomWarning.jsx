import { Link } from "react-router-dom";

export function BottomWarning ({warning , toLabel,to})
{
    return <div className=" flex col- justify-center font-medium">
        <div>
            {warning}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
            {toLabel}
        </Link>  
    </div>
}