import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { DynamicTableComponent } from '../../customComponents/dynamicTable/dynamicTable.component';

@NgModule({
    declarations: [DynamicTableComponent],
    imports: [ThemeModule, RouterModule, CommonModule],
    providers: [],
})
export class DynamicTableModule { }
