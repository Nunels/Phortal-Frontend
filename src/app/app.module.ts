import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdminModule } from './pages/admin/admin.module';
import { CarrelloModule } from './pages/carrello/carrello.module';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FotografiModule } from './pages/fotografi/fotografi.module';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        AdminModule,
        HomeModule,
        CarrelloModule,
        FotografiModule
        
        
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
