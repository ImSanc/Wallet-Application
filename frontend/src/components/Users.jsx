import { useEffect, useState } from "react";
import { User } from "./User";
import axios from "axios";

export function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const token  = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            headers: {
                'Authorization': token
            }
        })
            .then( (response) => {
                const dbUsers = response.data.Users;
                const finalUsersList = dbUsers.filter(user => user.username !== username);
                setUsers(finalUsersList)
            });
    }, [filter]);

    return (
        <div className="px-4 mx-4 bg-white rounded-lg py-3">
            <div className="font-bold p-1 flex justify-start w-full">
                Users
            </div>
            <div className="my-2">
                <input className="w-full px-2 py-2 border rounded  focus:outline-none " type="text" placeholder="Search users..."  onChange={(e)=>{
                   setFilter(e.target.value);
                }}/>
            </div>
            <div>
                {users.map((users, index) => <User key={index} user = {users} />)}
            </div>
        </div>
    );
}
