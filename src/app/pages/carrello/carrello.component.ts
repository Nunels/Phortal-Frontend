import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Fotografia } from 'src/app/data/model/fotografia';
import { FotografiaService } from 'src/app/data/service/fotografia.service';
import { Richiesta } from 'src/app/data/model/richiesta';
import { RichiestaService } from 'src/app/data/service/richiesta.service';


@Component({
    selector: 'app-carrello',
    templateUrl: './carrello.component.html',
    providers: [RichiestaService],

})
export class CarrelloComponent implements OnInit {
    text = AppComponent.text;
    nome: string;
    cognome: string;
    registerForm: FormGroup;
    hide = true;
    fotografie: Fotografia[] = [];
    inviata: boolean = false;
    richiesta: Richiesta;
    carrelloVuoto:boolean=false;

    constructor(private formBuilder: FormBuilder, private fotografiaService: FotografiaService
        , private richiestaService: RichiestaService) { }



    ngOnInit() {
        this.fotografie = this.fotografiaService.getFotografieCarrello();
        this.registerForm = this.formBuilder.group({
            nome: ['', Validators.required],
            cognome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });

    }
    //onSubmit()
    salvaRichiesta() {
        if(!(this.fotografie.length>0)){
            this.carrelloVuoto=true;
        } 
         if (this.registerForm.valid && this.fotografie.length>0) {
            let richiesta = new Richiesta();
            richiesta.nome = this.registerForm.controls['nome'].value;
            richiesta.cognome = this.registerForm.controls['cognome'].value;
            richiesta.email = this.registerForm.controls['email'].value;
            richiesta.fotoRichieste = this.fotografie;

            this.inviata = true;
            this.richiestaService.postSalvaRichiesta(richiesta).subscribe(response => {
                this.richiesta = response
            });
            this.fotografie = [];
            this.fotografiaService.resetCarrello();
        }
    }
    rimuoviCarrello(fotografia: Fotografia) {
        this.fotografiaService.removeFotografia(fotografia);
    }
    svuotaCarrello() {
        this.fotografie = [];
        this.fotografiaService.resetCarrello();
        this.carrelloVuoto=true;
    }

}
