const SingleCommentDetails = ({comment}) => {

    return (<div>
        <h3>
            More Comment
        </h3>
        <p>
            id - {comment.id} <br/>
            postId - {comment.postId}  <br/>
            name - {comment.name}  <br/>
            email - {comment.email}  <br/>
            body - {comment.body}


        </p>


    </div>)
}
export {SingleCommentDetails};