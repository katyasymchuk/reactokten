let _url = 'https://api.spacexdata.com/v3/launches/';
const getLaunches = () => {
    return fetch(_url)
        .then(value => value.json())
}

export {getLaunches};