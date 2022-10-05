import React from 'react';


function Comment({comment}) {

    return   <div className={'Comment'}>
        <h2>{comment.id} - {comment.body} </h2>
    </div>
        ;
}

export {Comment}
