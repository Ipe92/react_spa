export function haeMonivedot() {
    return {
        type: "HAE_MONIVEDOT",
        payload: fetch(
            "https://www.veikkaus.fi/api/sport-open-games/v1/games/MULTISCORE/draws",
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