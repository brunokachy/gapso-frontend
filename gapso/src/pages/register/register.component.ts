import { AlertService } from './../../service/alert/alert.service';
import { Component } from '@angular/core';
import { User } from '../../model/User';
import { Business } from '../../model/Business';
import { PortalUserRole } from '../../model/PortalUserRole';
import { APIService } from '../../service/api.service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})

export class RegisterComponent {
    user: User = new User()
    business: Business = new Business()
    submitted: boolean = false
    portalUserRole: PortalUserRole = new PortalUserRole();

    constructor(private alertService: AlertService, private apiService: APIService) {

    }

    registerUser() {
        if (this.user.firstName == null || this.user.surname == null || this.user.emailAddress == null
            || this.user.phoneNumber == null || this.business.name == null || this.submitted == false) {
            this.alertService.error("Please fill all fields")
            return
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.emailAddress))) {
            this.alertService.error("Invalid email address")
            return
        }

        if (isNaN(parseInt(this.user.phoneNumber))) {
            this.alertService.error("Invalid phone number")
            return
        }

        let requestData = { "emailAddress": this.user.emailAddress }
        this.apiService.callAPI(this.user, this.apiService.VERIFYEMAILADDRESS).subscribe(
            data => {
                console.log(data)
            },
            error => {
                console.log(error);

            });



        //     else {

        //         this.createService.createUser(this.user).subscribe(
        //             user => {
        //                 this.business.owner = user;
        //                 user.designation = this.genericService.businessManager;
        //                 this.createService.createBusiness(this.business).subscribe(
        //                     business => {
        //                         this.portalUserRole.business = business;
        //                         this.portalUserRole.portalUser = user;
        //                         this.createService.createPortalUserRole(this.portalUserRole).subscribe(
        //                             portalUserRole => {
        //                                 this.genericService.sendNewUserEmail(user).subscribe(
        //                                     data => {
        //                                         sessionStorage.setItem('currentUser', JSON.stringify(user));
        //                                         sessionStorage.setItem('role', JSON.stringify(portalUserRole));
        //                                         this.alertService.success("Your Registration was Successful. \n\
        //                                         Registration Approval Notice will be sent to your email by the Administrator shortly. \n\
        //                                         Thank You!!!");
        //                                         this.newUser();

        //                                     },
        //                                     error => {
        //                                         this.deleteService.deletePortalUserRole(portalUserRole).subscribe();
        //                                         this.deleteService.deleteBusiness(business).subscribe();
        //                                         this.deleteService.deleteUser(user).subscribe();
        //                                         console.log(error);
        //                                         this.alertService.error("Registration Unsuccessful. Please Try Again or Contact Administrator");
        //                                         this.submitted = false;
        //                                     });
        //                             },
        //                             error => {
        //                                 console.log(error);
        //                                 this.deleteService.deleteBusiness(business).subscribe();
        //                                 this.deleteService.deleteUser(user).subscribe();
        //                                 this.alertService.error("Registration Unsuccessful. Please Try Again or Contact Administrator");
        //                                 this.submitted = false;
        //                             });
        //                     },
        //                     error => {
        //                         console.log(error);
        //                         this.deleteService.deleteUser(user).subscribe();
        //                         this.alertService.error("Registration Unsuccessful. Please Try Again or Contact Administrator");
        //                         this.submitted = false;
        //                     });
        //             },
        //             error => {
        //                 console.log(error);
        //                 this.alertService.error("Registration Unsuccessful. Please Try Again or Contact Administrator");
        //                 this.submitted = false;
        //             });
        //     }
    }
}
