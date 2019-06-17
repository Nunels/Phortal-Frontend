import { Component } from '@angular/core';
import { AppComponent} from '../../app.component';
import { FotografiaService } from '../../data/service/fotografia.service';
import { Fotografia } from '../../data/model/Fotografia';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',


})
export class HomeComponent {
    text = AppComponent.text;
    fotografie:Fotografia[]=[];
    

    constructor(private fotografiaService: FotografiaService) { }
    
    ngOnInit() {
        this.fotografiaService.getElencoImmagini().subscribe(response => {
            this.fotografie = response
        } );
    }
    aggiungiCarrello(fotografia:Fotografia){
        this.fotografiaService.aggiungiFotografia(fotografia);
    }

}
