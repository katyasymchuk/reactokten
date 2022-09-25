import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);

            });

    }, []);
    return (
        <div>
            <h1>All posts</h1>

            {
                posts.map(value => <Post
                    key={value.id}
                    post={value}/>)
            }

        </div>
    );
}