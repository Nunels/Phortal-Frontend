import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarrelloComponent } from './carrello.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from 'src/app/customComponents/autocomplete/autocomplete.component';

@NgModule({
    declarations: [
       CarrelloComponent,
        AutocompleteComponent,
    ],
    imports: [
        RouterModule,
        ThemeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
})
export class CarrelloModule { }
