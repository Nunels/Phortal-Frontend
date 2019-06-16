import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fotografia } from '../model/fotografia';
import { Richiesta } from '../model/richiesta';

@Injectable()
export class RichiestaService {

    constructor(private http: HttpClient) { }

    getElencoRichieste(): Observable<Richiesta[]> {
        return this.http.get<Richiesta[]>('http://localhost:8080/richieste');
    }

    
}
