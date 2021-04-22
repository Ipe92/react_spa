export function lisaaTarina(uusiTarina) {
    return { type: "LISAA_TARINA", payload: uusiTarina }
}
export function poistaTarina(index) {
    return { type: "POISTA_TARINA", payload: index }
}