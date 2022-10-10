import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {commentActions} from "../../redux";
import {Comment} from "../Comment/Comment";


const Comments = () => {

	const dispatch = useDispatch();
	const {comments, error, loading, commentFromAPI} = useSelector(state => state.commentReducer);


	useEffect(() => {
		dispatch(commentActions.getAll())
	}, []);

	return (
		<div  className={'Comments'}>
			{loading&&<h1>Loading........................</h1>}
			{error&& <h1>Error</h1>}

			{comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
		</div>
	);
};

export {Comments};