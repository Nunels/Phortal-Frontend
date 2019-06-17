import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { RegistrazioneService } from 'src/app/data/service/registrazione.service';
import { Fotografia } from 'src/app/data/model/fotografia';
import { FotografiaService } from 'src/app/data/service/fotografia.service';
import { Richiesta } from 'src/app/data/model/richiesta';
import { RichiestaService } from 'src/app/data/service/richiesta.service';


@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.component.html',
    providers:[RichiestaService],
    
})
export class RegistrazioneComponent implements OnInit {
    text = AppComponent.text;
    nome: string;
    cognome: string;
    registerForm: FormGroup;
    hide = true;
    fotografie:Fotografia[]=[];
    inviata:boolean=false;
    richiesta:Richiesta;

    // Mappa base popolata solo una volta nell'init
    mapRegioni = new Map<string, Array<string>>();

    constructor(private formBuilder: FormBuilder, private fotografiaService: FotografiaService
        ,private richiestaService: RichiestaService) { }



    ngOnInit() {
        this.fotografie=this.fotografiaService.getFotografieCarrello();
        this.registerForm = this.formBuilder.group({
            nome: ['', Validators.required],
            cognome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });

    }
    //onSubmit()
    salvaRichiesta() {
        if(this.registerForm.valid){
        let richiesta=new Richiesta();
        richiesta.nome=this.registerForm.controls['nome'].value;
        richiesta.cognome=this.registerForm.controls['cognome'].value;
        richiesta.email=this.registerForm.controls['email'].value;
        richiesta.fotoRichieste=this.fotografie;

        this.inviata=true;
        this.richiestaService.postSalvaRichiesta(richiesta).subscribe(response => {
            this.richiesta=response
        });
        this.fotografie=[];
        }
    }
    rimuoviCarrello(fotografia:Fotografia){
        this.fotografiaService.removeFotografia(fotografia);
    }
    
}
