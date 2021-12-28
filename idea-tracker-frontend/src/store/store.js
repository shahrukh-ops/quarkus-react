import { createStore } from 'redux';

const initialState = {

    navigateTo: "LOGIN",
    isLoggedIn: false,
    ideas: null,
    accessToken: "",
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
        case "SET_LOGIN":
            return {
                ...state,
                isLoggedIn: action.payload
            };

        case "SET_IDEA":
            return {
                ...state,
                ideas: action.payload
            };
        case "SET_IDEA":
            return {
                ...state,
                accessToken: action.payload
            };
        default:
            return state;
    }

}

const store = createStore(reducer);

export default store;