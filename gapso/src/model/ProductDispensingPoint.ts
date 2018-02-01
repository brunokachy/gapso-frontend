import {Product} from '../model/Product';
import {Station} from '../model/Station';
export class ProductDispensingPoint {
    public id: number;
    public name: string;
    public createdDate: Date;
    public modifiedDate: Date;
    public active: boolean;
    public station: Station;
    public product: Product;
    public currentAttendant: string;

    constructor(
    ) {}


}
