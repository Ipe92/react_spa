export function getBirds() {
    return {
        type: "GET_BIRDS",
        payload: fetch("/api/birds").then(response => response.json()),
    };
}

export function addBird(newBird) {
    return {
        type: "ADD_BIRD",
        payload: fetch("/api/birds", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newBird),
        }).then(response => response.json()),
    };
}

export function removeBird(id) {
    return {
        type: "REMOVE_BIRD",
        payload: fetch(`/api/birds/${id}`, {
            method: "DELETE",
        }).then(() => {
            return id;
        }),
    };
}