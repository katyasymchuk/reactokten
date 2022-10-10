import {NavLink} from "react-router-dom";

const Comment = ({comment}) => {

    const {id, name} = comment;

    return <div className={'Post'}>
        <div>id: {id}</div>
        <div>Name: {name}</div>
        <h2>
            <NavLink to={`/comments/${id}`}>
                More
            </NavLink>
        </h2>


    </div>

};

export {Comment}