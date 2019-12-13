import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE
} from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const smurfReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_SMURF_START:
            // -> FETCH_SMURF_SUCCESS or FETCH_SMURF_FAILURE
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default smurfReducer;