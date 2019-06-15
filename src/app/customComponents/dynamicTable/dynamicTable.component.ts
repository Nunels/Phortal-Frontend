import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dynamic-table',
    templateUrl: './dynamicTable.component.html',
    providers: [],
})

export class DynamicTableComponent implements OnInit {
    @Input() data: any[];
    @Input() columns: any[];
    displayedColumns: string[];

    ngOnInit() {
        this.displayedColumns = this.columns.map(x => x.columnDef);
    }

}
