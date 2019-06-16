import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ComportamentaleService } from '../../data/service/comportamentale.service';
import { Comportamentale } from '../../data/model/comportamentale';
import { FotografiaService } from 'src/app/data/service/fotografia.service';
import { Fotografia } from 'src/app/data/model/fotografia';


@Component({
    selector: 'app-comportamentale',
    templateUrl: './comportamentale.component.html',
    providers: [FotografiaService],
})


export class ComportamentaleComponent implements OnInit {
    text = AppComponent.text;
    data: Comportamentale[] = [];
    file: File = new File([''], '');
    fotografia: Fotografia;
    columns = AppComponent.columns.comportamentale.dati;
    displayedColumns = this.columns.map(x => x.columnDef);
    caricata: boolean = false;

    constructor(private fotografiaService: FotografiaService) { }
    ngOnInit() {

    }
    salvaImmagine() {

            this.caricata = true;

            this.fotografiaService.postSalvaImmagine(this.file).subscribe(response => {
                this.fotografia = response
            });
        

    }
}
