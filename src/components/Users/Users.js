import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";


const Users = () => {
    let [users, setUsers] = useState([]);
    let state = useSelector(state => state.userReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {
        usersService.getAll().
        then(({data}) => {
                setUsers(data);
            })
            .then(({data}) => {
                dispatch({type: 'LOAD_USERS',payload:data});
            });

    }, []);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};