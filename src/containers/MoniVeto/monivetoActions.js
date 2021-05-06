export function haeMonivedot() {
    return {
        type: "HAE_MONIVEDOT",
        payload: fetch(
            "/veikkausapi/games/MULTISCORE/draws",
            {
                Headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-ESA-API-Key': 'ROBOT'
                },
            }
        ).then(response => response.json()),
    };
}