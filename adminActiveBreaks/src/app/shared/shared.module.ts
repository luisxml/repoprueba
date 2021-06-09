import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Components
import { HeaderComponent } from "./header/header.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        BreadcrumbComponent,
        SidebarComponent,
        HeaderComponent,
        PagenotfoundComponent,
    ],
    exports: [
        BreadcrumbComponent,
        SidebarComponent,
        HeaderComponent,
        PagenotfoundComponent,
    ]
})

export class SharedModule {}