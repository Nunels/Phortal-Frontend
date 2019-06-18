import { Injectable } from '@angular/core';
import { Regione } from '../model/regione';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarrelloService {

    constructor(private http: HttpClient) { }

    getRegioni(): Observable<Regione[]> {
        return this.http.get<Regione[]>('http://localhost:3000/regioni');
    }

    getMapRegioniByLetter(regioni: Regione[]) {
        var mapRegioni = new Map<string, Array<string>>();
        regioni.forEach(regione => {
            var letter = regione.nome.charAt(0);
            if (mapRegioni.has(letter)) {
                mapRegioni.get(letter).push(regione.nome);
            }
            else {
                mapRegioni.set(letter, new Array(regione.nome));
            }
        });
        return mapRegioni;
    }
}
