import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function PostDetails() {
    let {id} = useParams();
    let [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });


    }, [id]);
    return (
        <div className={'PostDetails'}>
           Post
            <h4>Title - {post.title}</h4>
            <p>Body - {post.body}</p>



        </div>
    );
}