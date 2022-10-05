import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import { postsService} from "../../services/posts.service";
import {Post} from "../Post/Post";


const Posts = () => {
    const [posts, setPosts] = useState([]);

    let state = useSelector(state => state.postReducer);
    console.log(state);
    let dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().
            then(({data}) => {
                setPosts(data);
            })
            .then(({data}) => {
                dispatch({type: 'LOAD_POSTS',payload:data});
            });

    }, []);


    return (
        <div className={"Posts"}>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};