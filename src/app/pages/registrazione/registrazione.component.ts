import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { RegistrazioneService } from 'src/app/data/service/registrazione.service';
import { Fotografia } from 'src/app/data/model/fotografia';
import { FotografiaService } from 'src/app/data/service/fotografia.service';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.component.html',
    providers: [FotografiaService],
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
        this.registerForm = this.formBuilder.group({
            nome: ['', Validators.required],
            cognome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            regione: ['', Validators.required],
        });
        this.fotografie=this.fotografiaService.getFotografiaCarrello();
    }

    onSubmit() {
        console.log(this.nome);
    }
    
}
