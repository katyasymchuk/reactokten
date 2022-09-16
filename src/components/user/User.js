export default function User(props) {
    let {item: user,lift} = props;

    return (<div className={'User'}>
        <h2>{user.id} - {user.name} </h2>
        <button className={"button button1"}
        onClick={()=>{
            lift(user);
        }}>details</button>
    </div>);
}