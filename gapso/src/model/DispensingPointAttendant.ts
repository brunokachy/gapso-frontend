import { ProductDispensingPoint } from '../model/ProductDispensingPoint';
import { User } from '../model/User';
export class DispensingPointAttendant {
    public id: number;
    public dispensingPoint: ProductDispensingPoint;
    public createdDate: Date;
    public active: boolean;
    public attendant: User;

    constructor() { }
}
