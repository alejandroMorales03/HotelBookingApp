export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const SET_CUSTOMER = 'SET_CUSTOMER';

export const setIsAuthenticated = isAuthenticated => dispatch => {
    dispatch({
        type: SET_IS_AUTHENTICATED,
        payload: isAuthenticated,
    });
};

export const setCustomer = customer => dispatch => {
    dispatch({
        type: SET_CUSTOMER,
        payload: customer,
    });
};
