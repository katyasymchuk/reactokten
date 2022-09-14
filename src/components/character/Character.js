export default function Character(props){
    let {item:character}= props
    return(
        <div class="Rickandmorty">

            <h2> {character.name}</h2>
            <img src={character.image} />
            <h3>Status - {character.status}</h3>
            <h3>Gender - {character.gender}</h3>





        </div>
    )
}

