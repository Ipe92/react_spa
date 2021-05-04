export function lisaaTarina(uusiTarina) {
    return { type: "LISAA_TARINA", payload: uusiTarina }
}
export function poistaTarina(id) {
    return { type: "POISTA_TARINA", payload: id }
}