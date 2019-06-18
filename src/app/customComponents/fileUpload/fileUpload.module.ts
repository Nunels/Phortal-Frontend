import { NgModule } from '@angular/core';
import { FileUploadComponent } from './fileUpload.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIcon, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        FileUploadComponent,
    ],
    imports: [
        MatButtonModule, MatFormFieldModule, MatInputModule,MatIconModule
    ],
    exports: [],
    providers: [],
})
export class FileUploadModule { }
