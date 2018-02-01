import { Business } from '../model/Business';
import { User } from '../model/User';
export class Station {
    public id: number;
    public name: string;
    public createdDate: Date;
    public modifiedDate: Date;
    public active: boolean;
    public business: Business;
    public stationType: string;
    public geoLocation: string;
    public latitude: string;
    public longitude: string;
    public address: string;
    public manager: User;

    constructor(
    ) { }

}