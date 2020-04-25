import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FplService } from './fpl-service';
import { FPLServiceBridge } from './fpl-service-bridge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ FplService, FPLServiceBridge],
  bootstrap: [AppComponent]
})
export class AppModule { }
