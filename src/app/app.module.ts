import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridComponent,
         DxDataGridModule,
         DxSelectBoxModule,
         DxCheckBoxModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxCheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
