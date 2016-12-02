import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent, DialogContent } from './app.component';
import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DialogContent
    ],
    entryComponents: [
        DialogContent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
