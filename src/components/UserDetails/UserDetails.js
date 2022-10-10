import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {userActions} from "../../redux";
import {SingleUserDetails} from "../SingleUserDetails/SingleUserDetails";

const UserDetails = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const {userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getById({id}))
        console.log(userFromAPI)
    }, [id]);


    return (
        <div className={'UserDetails'}>

            {userFromAPI && (<SingleUserDetails user={userFromAPI}/>)}

        </div>
    );
}
export {
    UserDetails
}