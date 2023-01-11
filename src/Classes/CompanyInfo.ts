export class CompanyInfo {
    COMPANYID: string;
    COMPANYNO: string;
    NAME: string ;

    constructor(id: string, cmpno: string, cmpname: string) {
        this.COMPANYID = id;
        this.COMPANYNO = cmpno;
        this.NAME = cmpname;
    }
}