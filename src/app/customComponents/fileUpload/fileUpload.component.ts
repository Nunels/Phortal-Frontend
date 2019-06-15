import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-file-upload',
    templateUrl: './fileUpload.component.html',
    styleUrls: ['./fileUpload.component.scss']
})

export class FileUploadComponent {
    file: File = new File([''], '');
    text = AppComponent.text;
    @Output() fileUpload: EventEmitter<File> = new EventEmitter<File>();

    upload(file: File) {
        this.file = file;
        this.fileUpload.emit(this.file);
    }
}
