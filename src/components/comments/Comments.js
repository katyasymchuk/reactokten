import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Comment from "../comment/Comment";



export default  function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments([...value]);

            });

    }, []);

    return (
        <div className={'Comments'}>

            {
                comments.map(value => <Comment
                    key={value.id}
                    comment={value}/>)
            }

        </div>
    );
}