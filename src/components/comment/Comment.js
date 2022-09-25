import {Link} from "react-router-dom";

export default  function Comment({comment,post}) {
    return (<div className={'Comment'}>
        <h2> Comment № {comment.id}. Name - {comment.name} </h2>
        <p>Email: {comment.email} <br/>
            Body: {comment.body}</p>
        <div className={'Details'}>
            <Link to={'/posts/' + comment.postId} >details</Link>
        </div>

    </div>);
}
