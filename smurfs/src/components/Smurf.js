import React from 'react'

const Smurf = props => {

    const {name, age, height, id} = props.smurf
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{age} years old</p>
                <p>{height}</p>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default Smurf;