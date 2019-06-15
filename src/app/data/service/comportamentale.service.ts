import { Injectable } from '@angular/core';
import { Comportamentale } from '../model/comportamentale';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComportamentaleService {

    constructor(private http: HttpClient) { }

    getData(): Observable<Comportamentale[]> {
        return this.http.get<Comportamentale[]>('http://localhost:3000/data');
    }
}
