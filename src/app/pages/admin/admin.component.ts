import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FotografiaService } from 'src/app/data/service/fotografia.service';
import { Fotografia } from 'src/app/data/model/fotografia';
import { RichiestaService } from 'src/app/data/service/richiesta.service';
import { Richiesta } from 'src/app/data/model/richiesta';


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    providers: [FotografiaService, RichiestaService],

})


export class AdminComponent implements OnInit {
    text = AppComponent.text;
    file: File = new File([''], '');
    fotografia: Fotografia;
    caricata: boolean = false;
    richieste: Richiesta[] = [];
    fotografie: Fotografia[] = [];
    inserisci:boolean=false;

    constructor(private fotografiaService: FotografiaService, private richiestaService: RichiestaService) { }
    ngOnInit() {
        this.richiestaService.getElencoRichieste().subscribe(response => {
            this.richieste = response
        });

    }
    salvaImmagine() {

        if (this.file.size > 0) {
            this.caricata = true;
            this.inserisci=false;
            this.fotografiaService.postSalvaImmagine(this.file).subscribe(response => {
                this.fotografia = response
            });
        } else {
            this.inserisci=true;
        }


    }
}
