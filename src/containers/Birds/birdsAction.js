export function getBirds() {
    return {
        type: "GET_BIRDS",
        payload: fetch("/api/birds").then(response => response.json()),
    };
}