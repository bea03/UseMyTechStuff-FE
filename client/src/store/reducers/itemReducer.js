import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_START} from '../actions';

export const initialState = {
    data: [],
    error:'',
    fetchingData:false,    
}

export const itemReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case ADD_START:
            return{...state, fetching:true};
        case FETCH_SUCCESS:
            return{...state, data:action.payload, fetching:false};
        case FETCH_FAILURE:
            return{...state, error:action.payload, fetching:false};
        default:
            return state
    }
}