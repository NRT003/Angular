import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { FormsModule } from '@angular/forms';
import { QueryComponent } from './query/query.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    QueryComponent,
    HeaderComponent,
    SidebarComponent,
    QueryparameterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
