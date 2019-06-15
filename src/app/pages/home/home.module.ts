import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule,
        ThemeModule,
        CommonModule,
    ],
    providers: [],
})
export class HomeModule { }
