import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { FileUploadComponent } from '../../customComponents/fileUpload/fileUpload.component';
import { ComportamentaleComponent } from './comportamentale.component';
import { DynamicTableComponent } from '../../customComponents/dynamicTable/dynamicTable.component';

@NgModule({
    declarations: [
        ComportamentaleComponent,
        FileUploadComponent,
        DynamicTableComponent,
    ],
    imports: [ThemeModule, RouterModule, CommonModule],
    providers: [],
})
export class ComportamentaleModule { }
