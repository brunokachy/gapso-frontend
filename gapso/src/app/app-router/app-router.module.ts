import { RegisterComponent } from './../../pages/register/register.component';
import { LoginComponent } from './../../pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AppRouterComponent } from './app-router.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppRouterComponent,
    ],
    exports: [
        AppRouterComponent,
    ]
})
export class AppRouterModule {

}
