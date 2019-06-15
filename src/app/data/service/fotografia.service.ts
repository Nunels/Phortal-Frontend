import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fotografia } from '../model/fotografia';

@Injectable()
export class FotografiaService {

    constructor(private http: HttpClient) { }

    getElencoImmagini(): Observable<Fotografia[]> {
        return this.http.get<Fotografia[]>('http://localhost:8080/fotografie');
    }

    
}
