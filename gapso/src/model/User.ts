export class User {
    public id: number;
    public firstName: string;
    public surname: string;
    public emailAddress: string;
    public phoneNumber: string;
    public password: string;
    public middleName?: string;
    public createdDate: Date;
    public modifiedDate: Date;
    public active: boolean;
    public token: string;
    public designation: string;
    public businessId: number;
    public stationId: number;

    constructor(
    ) {}
   
}
