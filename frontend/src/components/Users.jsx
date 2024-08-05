import { useEffect, useState } from "react";
import { User } from "./User";
import axios from "axios";

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter`)
            .then(response => setUsers(response.data.Users));
    }, [users]);

    return (
        <div className="px-4 mx-4">
            <div className="font-bold p-1 flex justify-start w-full">
                Users
            </div>
            <div className="my-2">
                <input className="w-full px-2 py-1 border rounded border-slate-200" type="text" placeholder="Search users..." />
            </div>
            <div>
                {users.map((users, index) => <User key={index} user = {users} />)}
            </div>
        </div>
    );
}
