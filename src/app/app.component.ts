import { Component } from '@angular/core';
import { text_properties } from '../app/utils/text_properties';
import { table_columns } from '../app/utils/table_columns';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    static text = text_properties;
    static columns = table_columns;
}
