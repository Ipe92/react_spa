export function haeTarinat() {
    return {
        type: "HAE_TARINAT", payload: fetch("http://localhost:4000/tarinat")
            .then(response => response.json()
            ),
    };
}

export function lisaaTarina(uusiTarina) {
    return {
        type: "LISAA_TARINA",
        payload: fetch("http://localhost:4000/tarinat")
            .then(response => response.json()
            ),
    };
}

export function poistaTarina(id) {
    return { type: "POISTA_TARINA", payload: id }
}