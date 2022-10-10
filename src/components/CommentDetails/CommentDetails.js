import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {commentActions} from "../../redux";
import {SingleCommentDetails} from "../SingleCommentDetails/SingleCommentDetails";



const CommentDetails = () =>{
    const {id} = useParams();;
    const dispatch = useDispatch();
    const {commentFromAPI} = useSelector(state => state.commentReducer);

    useEffect(() => {
        dispatch(commentActions.getById({id}))
        console.log(commentFromAPI)
    }, [id]);


    return (
        <div  className={'CommentDetails'}>

                {commentFromAPI && (<SingleCommentDetails comment={commentFromAPI}/>)}

        </div>
    );
}
export {
    CommentDetails
}