import {Business} from '../model/Business';
export class Product {
    public id: number;
    public name: string;
    public createdDate: Date;
    public modifiedDate: Date;
    public active: boolean;
    public business: Business;
    public description: string;
    public productCode: string;
    public unit: string;


    constructor(
    ) {}

    
}