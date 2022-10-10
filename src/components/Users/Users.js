import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {userActions} from "../../redux";


const Users = () => {

    const dispatch = useDispatch();
    const {users, error, loading, userFromAPI} = useSelector(state => state.userReducer);


    useEffect(() => {
        dispatch(userActions.getAll())
    }, []);

    return (
        <div  className={'Users'}>
            {loading&&<h1>Loading........................</h1>}
            {error&& <h1>Error</h1>}

            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};