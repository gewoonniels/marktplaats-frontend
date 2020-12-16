import { Winkelmand } from "./winkelmand";

export interface Bestelling {
    betaalwijze: String;
    bezorgwijze: String;
    huisnummer: String;
    plaats: String;
    postcode:String;
    straat: String;
    winkelmand: Winkelmand
}