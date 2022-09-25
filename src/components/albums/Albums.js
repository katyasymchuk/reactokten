import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import Album from "../album/Album";


export default  function Albums() {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums([...value]);

            });

    }, []);

    return (
        <div>
            <h1>All albums</h1>
            {
                albums.map(value => <Album
                    key={value.id}
                    album={value}/>)
            }

        </div>
    );
}