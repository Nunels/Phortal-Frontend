import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule,
        ThemeModule,
        CommonModule,
    ],
    providers: [],
})
export class AutocompleteModule { }
