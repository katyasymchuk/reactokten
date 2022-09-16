function Ship(props) {
    console.log(props);
    const {item: ship} = props;

    return (
        <div className={'Ship'}>

            <h4>Mission name- {ship.mission_name} </h4>
            <p>Launch -  {ship.launch_year} year</p>
            <img src={ship.links.mission_patch_small}/>
        </div>
    );
}

export default Ship;