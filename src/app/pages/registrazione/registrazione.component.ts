import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { RegistrazioneService } from 'src/app/data/service/registrazione.service';
import { Fotografia } from 'src/app/data/model/fotografia';
import { FotografiaService } from 'src/app/data/service/fotografia.service';
import { Richiesta } from 'src/app/data/model/richiesta';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.component.html',
    
})
export class RegistrazioneComponent implements OnInit {
    text = AppComponent.text;
    nome: string;
    cognome: string;
    registerForm: FormGroup;
    hide = true;
    fotografie:Fotografia[]=[];

    // Mappa base popolata solo una volta nell'init
    mapRegioni = new Map<string, Array<string>>();

    constructor(private formBuilder: FormBuilder, private fotografiaService: FotografiaService) { }

    ngOnInit() {
        this.fotografie=this.fotografiaService.getFotografieCarrello();
        this.registerForm = this.formBuilder.group({
            nome: ['', Validators.required],
            cognome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });

    }

    onSubmit() {
        if(this.registerForm.valid){
        let richiesta=new Richiesta();
        richiesta.nome=this.registerForm.controls['nome'].value;
        console.log(richiesta.nome);
        }
    }
    rimuoviCarrello(fotografia:Fotografia){
        this.fotografiaService.removeFotografia(fotografia);
    }
    
}
