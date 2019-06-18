import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { FotografiComponent } from './fotografi.component';

@NgModule({
    declarations: [
        FotografiComponent,
        
    ],
    imports: [ThemeModule, RouterModule, CommonModule],
    providers: [],
})
export class FotografiModule { }
