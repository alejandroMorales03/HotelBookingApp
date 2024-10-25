import { createSlice, configureStore } from '@reduxjs/toolkit'

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    isAuthenticated: false,
    customer: {
        firstName: null,
        lastName: null,
        email: null,
    }
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
        console.log("setIsAuthenticated")
        console.log("action", action.payload)
        state.isAuthenticated = action.payload
    },
    setCustomer: (state, action) => {
        console.log("setCustomer")
        console.log("action", action.payload)
        state.customer = action.payload;
    }
  }
})

export const { setIsAuthenticated, setCustomer } = customerSlice.actions

export const customerStore = configureStore({
  reducer: customerSlice.reducer
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))
export const setIsAuthenticatedStore = (payload) => (dispatch) => {
    customerStore.dispatch(setIsAuthenticated(payload))
}
export const setCustomerStore = (payload) => (dispatch) => {
    customerStore.dispatch(setCustomer(payload))
}

export const isAuthenticatedSelector = (state) => state.customer.isAuthenticated

export const customerSelector = (state) => state.customer.customer

// export default customerSlice.reducer;
