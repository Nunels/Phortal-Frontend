import { Component } from '@angular/core';
import { AppComponent} from '../../app.component';
import { FotografiaService } from '../../data/service/fotografia.service';
import { Fotografia } from '../../data/model/Fotografia';

@Component({
    selector: 'app-home',
    templateUrl: './fotografia.component.html',


})
export class FotografiaComponent {
    text = AppComponent.text;
    fotografia:Fotografia;
    aggiunta:boolean=false;
    

    constructor(private fotografiaService: FotografiaService) { }
    
    ngOnInit() {
        this.fotografia=this.fotografiaService.getFotografiaVisualizza();

    }
    aggiungiCarrello(fotografia:Fotografia){
        this.fotografiaService.aggiungiFotografia(fotografia);
        this.aggiunta=true;
    }

}
