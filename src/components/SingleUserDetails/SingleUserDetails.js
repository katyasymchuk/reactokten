const SingleUserDetails = ({user}) => {

    return (<div>
            <h3>
                Info
            </h3>
            <p>
                name - {user.name} <br/>
                username - {user.username} <br/>
                address: <br/>
                street - {user.address.street} <br/>
                suite - {user.address.suite} <br/>
                city - {user.address.city} <br/>
                phone - {user.phone} <br/>
                website- {user.website} <br/>
                company - {user.company.name} <br/>

            </p>


        </div>)
}
export {SingleUserDetails};