import { Component } from '@angular/core';
import { AppComponent} from '../../app.component';
import { FotografiaService } from '../../data/service/fotografia.service';
import { Fotografia } from '../../data/model/Fotografia';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [FotografiaService]

})
export class HomeComponent {
    text = AppComponent.text;
    fotografie:Fotografia[]=[];
    img:string="data:image/jpg;base64,";

    constructor(private fotografiaService: FotografiaService) { }
    ngOnInit() {
        this.fotografiaService.getElencoImmagini().subscribe(response => {
            this.fotografie = response
        console.log(this.fotografie[0].id)
    this.img=this.img+this.fotografie[0].img} );
    }

}
