import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { RegistrazioneService } from 'src/app/data/service/registrazione.service';

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.component.html',
    providers: [RegistrazioneService],
})
export class RegistrazioneComponent implements OnInit {
    text = AppComponent.text;
    nome: string;
    cognome: string;
    registerForm: FormGroup;
    hide = true;

    // Mappa base popolata solo una volta nell'init
    mapRegioni = new Map<string, Array<string>>();

    constructor(private formBuilder: FormBuilder, private registrazioneService: RegistrazioneService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nome: ['', Validators.required],
            cognome: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            regione: ['', Validators.required],
        });
        this.registrazioneService.getRegioni().subscribe(response => {
            this.mapRegioni = this.registrazioneService.getMapRegioniByLetter(response);
        });
    }

    onSubmit() {
        console.log(this.nome);
    }
}
