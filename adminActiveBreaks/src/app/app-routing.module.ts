import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

// Routes
const routes: Routes = [
    { path: 'login', component: LoginComponent, data: {title: 'Login'}},
    { path: 'register', component: RegisterComponent, data: {title: 'Registro'}},
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        // canLoad: []
    },
    { path: '**', component: PagenotfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true, relativeLinkResolution: 'legacy' } );

@NgModule({

    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
