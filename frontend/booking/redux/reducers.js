import { SET_IS_AUTHENTICATED, SET_CUSTOMER } from './actions';

const initialState = {
    isAuthenticated: false,
    customer: {
        firstName: null,
        lastName: null,
        email: null,
    }
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload };
        case SET_CUSTOMER:
            return { ...state, customer: action.payload };
        default:
            return state;
    }
}

export default userReducer;