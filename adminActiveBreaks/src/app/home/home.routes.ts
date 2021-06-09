import { Routes } from '@angular/router';

// Components
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeSettingComponent } from './theme-setting/theme-setting.component';
import { PageBlankComponent } from './page-blank/page-blank.component';

// Routes
export const homeRoutes: Routes = [
    { path: 'page-blank', component: PageBlankComponent, data: {title: 'Pagina en blanco'}},
    { path: 'tema', component: ThemeSettingComponent, data: {title: 'Temas'}},
    { path: 'inicio', component: HomePageComponent, data: {title: 'Inicio'}},
    { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
    { path: '', redirectTo: 'inicio'}
];


