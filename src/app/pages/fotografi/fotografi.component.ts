import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Fotografo } from 'src/app/data/model/fotografo';
import { FotografoService } from 'src/app/data/service/fotografo.service';

@Component({
    selector: 'app-fotografi',
    templateUrl: './fotografi.component.html',
    providers: [FotografoService],
})


export class FotografiComponent implements OnInit {
    fotografi: Fotografo[] = [];

    constructor(private fotografoService: FotografoService) { }
    ngOnInit() {
        this.fotografoService.getElencoFotografi().subscribe(response => this.fotografi = response);
    }
}
