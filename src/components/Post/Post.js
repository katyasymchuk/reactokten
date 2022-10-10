import {NavLink} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;

    return <div className={'Post'}>
        <div>id: {id}</div>
        <div>Title: {title}</div>
        <h2>
            <NavLink to={`/posts/${id}`}>
                More
            </NavLink>
        </h2>


    </div>

};

export {Post}