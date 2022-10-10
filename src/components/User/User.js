import {NavLink} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;

    return <div className={'User'}>
        <div>id: {id}</div>
        <div>Name: {name}</div>
        <h2>
            <NavLink to={`/users/${id}`}>
                More
            </NavLink>
        </h2>


    </div>

};

export {User}