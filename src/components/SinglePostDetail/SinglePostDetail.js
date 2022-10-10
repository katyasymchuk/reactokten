const SinglePostDetails = ({post}) => {

    return (<div>
        <h3>
            More Post
        </h3>
        <p>
            id - {post.id} <br/>
            userId - {post.userId}  <br/>
            title - {post.title}  <br/>
            body - {post.body}
            

        </p>


    </div>)
}
export {SinglePostDetails};