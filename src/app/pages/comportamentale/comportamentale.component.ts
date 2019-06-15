import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ComportamentaleService } from '../../data/service/comportamentale.service';
import { Comportamentale } from '../../data/model/comportamentale';

@Component({
    selector: 'app-comportamentale',
    templateUrl: './comportamentale.component.html',
    providers: [ComportamentaleService],
})


export class ComportamentaleComponent implements OnInit {
    text = AppComponent.text;
    data: Comportamentale[] = [];
    file: File = new File([''], '');
    columns = AppComponent.columns.comportamentale.dati;
    displayedColumns = this.columns.map(x => x.columnDef);

    constructor(private comportamentaleService: ComportamentaleService) { }
    ngOnInit() {
        this.comportamentaleService.getData().subscribe(response => this.data = response);
    }
}
