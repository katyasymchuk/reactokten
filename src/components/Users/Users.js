import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {userActions} from "../../redux";


const Users = () => {

    const dispatch = useDispatch();
    const {users, error, loading, userFromAPI} = useSelector(state => state.userReducer);


    useEffect(() => {
        // usersService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, []);

    return (
        <div>
            {loading&&<h1>Loading........................</h1>}
            {error&& <h1>Error</h1>}
            <div>
                {userFromAPI&&userFromAPI.email}</div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};