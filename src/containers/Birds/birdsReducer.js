const initialState = {
    list: []
}
function birdsReducer(store = initialState, action) {
    switch (action.type) {
        case "GET_BIRDS_FULFILLED":
            return { ...store, list: action.payload };
        case "ADD_BIRD_FULFILLED":
            return { ...store, list: [...store.list, action.payload] };
        default:
            return store;
    }
}

export default birdsReducer;