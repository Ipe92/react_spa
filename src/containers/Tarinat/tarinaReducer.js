const initialStore = {
    tarinat: [
        "Listan juttu 1",
        "Listan juttu 2",
        "Listan juttu 3",
        "Listan juttu 4",
        "Listan juttu 5",
    ],
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
                    (tarina, index) => index !== action.payload
                ),
            };
        }
        default:
            return store;
    }
};

export default tarinaReducer;