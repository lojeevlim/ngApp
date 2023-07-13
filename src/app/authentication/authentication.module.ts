import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';

//components
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './authentication.component';
//primeng
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    //primeng
    DividerModule,
    ButtonModule,
    InputTextModule,
    ImageModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule { }
