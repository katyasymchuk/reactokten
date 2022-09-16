import User from "../user/User";
import {useEffect, useState} from "react";


export default function Users() {
    let [users, setUsers] = useState([]); // [[],set()]
    let [user,setUser] = useState(null)

    const lift = (obj)=>{
        setUser(obj)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
                console.log(value);
            });
    }, []);

    return (<div>
            <div className={'Info'}>
                <h3>User info</h3>
                Username -  {user?.username}
                <br/>
                Email - {user?.username}
                <br/>
                Adress:
                <br/>
                Street - {user?.address.street}
                <br/>
                City - {user?.address.city}
                <br/>
                phone- {user?.phone}
                <br/>
                website- {user?.website}
                <br/>
                company- {user?.company.name}

            </div>
            {users.map((user, index) => (<User
                item={user}
                key={index}
                lift={lift}/>))}

        </div>


    );
}