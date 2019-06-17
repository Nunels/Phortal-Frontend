import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ComportamentaleService } from '../../data/service/comportamentale.service';
import { Comportamentale } from '../../data/model/comportamentale';
import { FotografiaService } from 'src/app/data/service/fotografia.service';
import { Fotografia } from 'src/app/data/model/fotografia';
import { RichiestaService } from 'src/app/data/service/richiesta.service';
import { Richiesta } from 'src/app/data/model/richiesta';


@Component({
    selector: 'app-comportamentale',
    templateUrl: './comportamentale.component.html',
    providers: [FotografiaService,RichiestaService],

})


export class ComportamentaleComponent implements OnInit {
    text = AppComponent.text;
    data: Comportamentale[] = [];
    file: File = new File([''], '');
    fotografia: Fotografia;
    columns = AppComponent.columns.comportamentale.dati;
    displayedColumns = this.columns.map(x => x.columnDef);
    caricata: boolean = false;
    richieste:Richiesta[]=[];
    fotografie:Fotografia[]=[];

    constructor(private fotografiaService: FotografiaService,private richiestaService:RichiestaService) { }
    ngOnInit() {
        this.richiestaService.getElencoRichieste().subscribe(response => {
            this.richieste = response
        } );    

}
    salvaImmagine() {

            this.caricata = true;

            this.fotografiaService.postSalvaImmagine(this.file).subscribe(response => {
                this.fotografia = response
            });
        

    }
}
