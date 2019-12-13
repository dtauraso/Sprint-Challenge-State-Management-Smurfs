import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'


export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'


export const getSmurfs = () => dispatch => {

    dispatch({ type: FETCH_SMURF_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: FETCH_SMURF_FAILURE, payload: err.response})
        });
};

export const postSmurf = (event, smurfs, smurf) => dispatch => {
    event.preventDefault();

    console.log(smurf)
    dispatch({ type: POST_SMURF_START })
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: POST_SMURF_FAILURE, payload: err.response})
        })

}

export const deleteAddedSmurfs = (event, smurfs) => dispatch => {

    event.preventDefault()
    dispatch({ type: DELETE_SMURF_START })
    smurfs.filter(smurf => smurf.id > 0).forEach(smurf => {
            axios
                .delete(`http://localhost:3333/smurfs/${smurf.id}`)
                .catch(err => {
                    console.log(err.response)
                    dispatch({type: DELETE_SMURF_FAILURE, payload: err.response})
                })
        
    })
    console.log("done")
    dispatch({type: DELETE_SMURF_SUCCESS})
}