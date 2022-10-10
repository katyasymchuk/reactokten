import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {postActions} from "../../redux";
import {SinglePostDetails} from "../SinglePostDetail/SinglePostDetail";


const PostDetails = () =>{
    const {id} = useParams();;
    const dispatch = useDispatch();
    const {postFromAPI} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getById({id}))
        console.log(postFromAPI)
    }, [id]);


    return (
        <div className={'PostDetails'}>

                {postFromAPI && (<SinglePostDetails post={postFromAPI}/>)}

        </div>
    );
}
export {
    PostDetails
}