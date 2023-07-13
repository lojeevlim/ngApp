import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
//components
import { LayoutComponent } from './layout.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavigatorsComponent } from './navigations/navigators/navigators.component';
//primeng
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    NavigatorsComponent,
  ],
  imports: [

    LayoutRoutingModule, 
    //primeng
    MenubarModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    TabMenuModule,
    InputTextModule,
    ImageModule,
    AvatarModule,
    SplitButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
