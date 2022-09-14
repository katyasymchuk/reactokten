export default function Simpson(props){
    let {item:simpson}= props
    return(
        <div class="simpson">

            <h2> {simpson.name}   {simpson.surname}</h2>
            <img src={simpson.photo} />
            <h3>Age - {simpson.age}</h3>


        </div>
    )
}

