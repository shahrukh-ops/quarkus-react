import { createStore } from 'redux';

const initialState = {

    navigateTo: null,
    isLoggedIn: false,
    user: { userId: null, userEmail: "" }

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NAV":
            let nav = action.payload;
            return {
                ...state,
                navigateTo: action.payload
            };
        default:
            return state;
    }

}

const store = createStore(reducer);

export default store;