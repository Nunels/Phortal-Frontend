import { NgModule } from '@angular/core';
import { FileUploadComponent } from './fileUpload.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    declarations: [
        FileUploadComponent,
    ],
    imports: [
        MatButtonModule, MatFormFieldModule, MatInputModule
    ],
    exports: [],
    providers: [],
})
export class FileUploadModule { }
