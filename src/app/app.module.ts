import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ReverseandupperPipe } from './reverseandupper.pipe';
import { LoginComponent } from './login/login.component';
import { ROUTING } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ReverseandupperPipe,
    LoginComponent,
  ],
  imports: [BrowserModule, ROUTING, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
