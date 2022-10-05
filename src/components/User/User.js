import React from 'react';


 function User({user}) {

    return   <div>
        <h2>{user.id} - {user.name} </h2>
        <p>{user.email}</p>
        </div>
    ;
}

export {User}


