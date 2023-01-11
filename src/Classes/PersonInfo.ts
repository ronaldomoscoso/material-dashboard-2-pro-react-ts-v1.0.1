import { BSSearch } from "./BSSearch";

export class PersonInfo {
    PERSID: string;
    PERSNO: string;
    NAME: string;
    CARDNO: string;
    SITECODE: string;
    DOCUMENT: string | undefined;
    RESULTS: []
    constructor() {
        this.PERSID = "";
        this.PERSNO = "";
        this.NAME = "";
        this.CARDNO = "";
        this.SITECODE = "";
        this.DOCUMENT = "";
        this.RESULTS = [];
    }
};