import {useEffect, useState} from "react";
import {getLaunchesAxios} from "../../services/launches.api.axios.service";
import Ship from "../ship/Ship";
import ship from "../ship/Ship";

function Ships(){
    let [ships, setShips] = useState([]);

    useEffect(() => {
        console.log('effect');
        getLaunchesAxios().then(({data}) => {
            setShips(data);
        })
    }, []);
    return (
        <div className={'Ships'}>

            {
                ships.filter(({launch_year})=> launch_year!=="2020").map((ship,index) =>
                    <Ship key={index} item={ship}/>)
            }
        </div>
    );
}
export default Ships;