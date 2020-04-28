

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { PersonFilterSelectorComponent } from './person-filter-selector/component/person-filter-selector.component';
import { PersonFilterSelectorModule } from './person-filter-selector/person-filter-selector.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    PersonFilterSelectorModule
  ],
  declarations: [AppComponent, PersonFilterSelectorComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
