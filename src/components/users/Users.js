import User from "../user/User";

import {useEffect, useState} from "react";


export default function Users() {
    let [users, setUsers] = useState([]); // [[],set()]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    },[]);


    return (<div>
            <h1>All users</h1>
            {users.map((user, index) => (<User item={user} key={index}/>))}


        </div>


    );
}