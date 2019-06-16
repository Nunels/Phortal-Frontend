import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fotografia } from '../model/fotografia';
import { Fotografo } from '../model/fotografo';

@Injectable()
export class FotografoService {

    constructor(private http: HttpClient) { }

    getElencoFotografi(): Observable<Fotografo[]> {
        return this.http.get<Fotografo[]>('http://localhost:8080/fotografi');
    }

    
}
