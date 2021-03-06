const initialStore = {
    tarinat: [],
};
function tarinaReducer(store = initialStore, action) {
    console.log("ACTION", action);
    switch (action.type) {
        case "HAE_TARINAT_FULFILLED": {
            return {
                ...store,
                tarinat: action.payload,
            };
        }
        case "LISAA_TARINA_FULFILLED": {
            return {
                ...store,
                tarinat: [...store.tarinat, action.payload]
            };
        }
        case "POISTA_TARINA_FULFILLED": {
            return {
                ...store,
                tarinat: store.tarinat.filter(
                    (tarina) => tarina.id !== action.payload
                ),
            };
        }
        default:
            return store;
    }
};

export default tarinaReducer;