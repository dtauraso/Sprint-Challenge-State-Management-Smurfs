import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE
} from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    isDeleting: true,
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


        case POST_SMURF_START:
            // -> POST_SMURF_SUCCESS or POST_SMURF_FAILURE
            return {
                ...state,
                isPosting: true
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false,
                error: ''
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        
        case DELETE_SMURF_START:
            // -> DELETE_SMURF_SUCCESS or DELETE_SMURF_FAILURE
            return {
                ...state,
                isDeleting: true
            };
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: ''
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                isDeleting: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default smurfReducer;