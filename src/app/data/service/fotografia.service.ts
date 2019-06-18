import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fotografia } from '../model/fotografia';

@Injectable({
    providedIn: 'root'
  })
export class FotografiaService {

    fotografieCarrello:Fotografia[]=[];

    constructor(private http: HttpClient) { }

    getElencoImmagini(): Observable<Fotografia[]> {
        return this.http.get<Fotografia[]>('http://localhost:8080/fotografie');
    }
    postSalvaImmagine(img:File): Observable<Fotografia> {
        let formData = new FormData();
        formData.append('img',img);
        return this.http.post<Fotografia>('http://localhost:8080/fotografie',formData);
    }
    aggiungiFotografia(fotografia:Fotografia){
        this.fotografieCarrello.push(fotografia);
    }
    removeFotografia(fotografia:Fotografia){
        this.fotografieCarrello.splice(this.fotografieCarrello.indexOf(fotografia),1);
    }
    getFotografieCarrello():Fotografia[]{

        return this.fotografieCarrello;
        
    }
    resetCarrello(){
        this.fotografieCarrello=[];
    }

    
}
