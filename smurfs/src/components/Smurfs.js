import React from 'react'

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getSmurfs } from '../actions/smurfActions';
import Smurf from './Smurf';
const Smurfs = props => {

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
    { getSmurfs }
)(Smurfs)