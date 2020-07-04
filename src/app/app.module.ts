import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Make angular load the routes as /#/ & not refesh the whole page
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//GlobalRestService gets directly injected into components and services

import { GlobalRestService } from './services/rest/global-rest.service';
import { AppsettingsConfService } from './services/conf/appsettings-conf/appsettings-conf.service';
import { HttpClientModule } from '@angular/common/http';


// Authguard is used in app-routing.module for route security
import { AuthGuard } from './shared/gaurds/authgaurd/auth.gaurd';

// Primary entry layout & component
import { LayoutModule } from './modules/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    HttpClientModule,    
    AppRoutingModule,    
    LayoutModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthGuard,
    GlobalRestService,
    AppsettingsConfService
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }