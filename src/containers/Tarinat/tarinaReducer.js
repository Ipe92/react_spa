const initialStore = {
    tarinat: [],
};
function tarinaReducer(store = initialStore, action) {
    switch (action.type) {
        case "LISAA_TARINA": {
            return {
                ...store,
                tarinat: [...store.tarinat, action.payload]
            };
        }
        case "POISTA_TARINA": {
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