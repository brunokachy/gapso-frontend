import {Business} from '../model/Business';
import {User} from '../model/User';
import {Station} from '../model/Station';
import {DispensingPointAttendant} from '../model/DispensingPointAttendant';

export class PortalUserRole {
    public id: number
    public business: Business;
    public station: Station;
    public portalUser: User;
    public designation: string;
    public dispensingPointAttendant: DispensingPointAttendant;
    public active: boolean;

    constructor(
    ) {}
}