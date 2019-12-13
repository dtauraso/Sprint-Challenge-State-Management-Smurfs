import React, { useState } from 'react'

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getSmurfs, postSmurf, deleteAddedSmurfs } from '../actions/smurfActions';
import Smurf from './Smurf';
const Smurfs = props => {

    const [ newSmurf, setNewSmurf ] = useState({
        name: '',
        age: '',
        height: ''
    })
    const handleNameChange = changeEvent => {
        setNewSmurf({...newSmurf, 'name': changeEvent.target.value})
        // console.log(newSmurf)
    }

    const handleAgeChange = changeEvent => {
        setNewSmurf({...newSmurf, 'age': parseInt(changeEvent.target.value)})
        // console.log(newSmurf)
    }

    const handleHeightChange = changeEvent => {
        setNewSmurf({...newSmurf, 'height': changeEvent.target.value})
        // console.log(newSmurf)
    }

    const handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        // setNewSmurf({
        //     ...newSmurf,
        //     'height': newSmurf.height + 'cm'
        // })
        // quick cheat
        newSmurf['height'] += 'cm'
        console.log("submit", newSmurf)
    }
    return (
        <div>
            <h1>Smurfs</h1>
            {!props.smurfs && !props.isFetching && <p>Get Smurfs</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <div>
                {props.smurfs && props.smurfs.map((smurf) => (
                    <Smurf key={smurf.id} smurf={smurf} />
                ))
                }
            </div>
            <button onClick={props.getSmurfs}>Get Smurfs!</button>

            <form onSubmit={(e) => props.postSmurf(e, props.smurfs, newSmurf)}>
                <label>
                    Name
                <input
                    value={newSmurf.name}
                    onChange={handleNameChange}
                    type="text"
                    name="name"
                ></input>
                </label>
                <label>
                    Age
                <input
                    value={newSmurf.age}
                    onChange={handleAgeChange}
                    type="text"
                    name="age"
                ></input>
                </label>
                <label>
                    Height
                <input
                    value={newSmurf.height}
                    onChange={handleHeightChange}
                    type="text"
                    name="height"
                ></input>
                </label>
                <button>Add</button>
            </form>
            <button onClick={(e) => props.deleteAddedSmurfs(e, props.smurfs)}>Delete Added Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetch: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs, postSmurf, deleteAddedSmurfs }
)(Smurfs)