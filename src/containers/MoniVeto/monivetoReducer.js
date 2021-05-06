const initialStore = {
    monivedot: [],
};
function monivetoReducer(store = initialStore, action) {
    console.log("ACTION", action);
    switch (action.type) {
        case "HAE_MONIVEDOT_FULFILLED": {
            return {
                ...store,
                monivedot: action.payload,
            };
        }
        default:
            return store;
    }
};

export default monivetoReducer;