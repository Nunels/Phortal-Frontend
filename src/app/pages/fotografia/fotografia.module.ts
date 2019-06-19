import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotografiaComponent } from './fotografia.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
    declarations: [
        FotografiaComponent
    ],
    imports: [
        RouterModule,
        ThemeModule,
        CommonModule,
    ],
    providers: [],
})
export class HomeModule { }
