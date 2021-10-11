import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { TreasuresComponent } from './treasures/treasures.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    TreasuresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
