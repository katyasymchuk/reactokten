import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services/comments.service";
import {Comment} from "../Comment/Comment";




const Comments = () => {
    let [comments, setComments] = useState([]);
    let state = useSelector(state => state.commentReducer);
    console.log(state);
    let dispatch = useDispatch();


    useEffect(() => {
        commentsService.getAll().
        then(({data}) => {
            setComments(data);
        })
            .then(({data}) => {
                dispatch({type: 'LOAD_COMMENTS',payload:data});
            });

    }, []);

    return (
        <div className={'Comments'}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};