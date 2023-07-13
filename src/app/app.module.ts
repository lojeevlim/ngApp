import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { createApollo } from './configs/apollo.config';

//components
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

//primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,



  ],
  imports: [
    BrowserModule,
    CommonModule,
    ApolloModule,
    AppRoutingModule,

    //primeng
    BrowserAnimationsModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { 
  //inject apollo service
  constructor(apollo: Apollo) {
    apollo.create(createApollo());
  }
}
