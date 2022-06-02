import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { AddtodoComponent } from './addtodo/addtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
