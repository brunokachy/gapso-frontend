import { User } from '../model/User';
export class Business {
    public id: number;
    public name: string;
    public owner: User;
    public createdDate: Date;
    public modifiedDate: Date;
    public active: boolean;
    public approved: boolean;
    public mailingAddress: string;
    public emailAddress: string;
    public logo?: any;
    constructor(
    ) { }

}
