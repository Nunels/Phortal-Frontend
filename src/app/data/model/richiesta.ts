import { logging } from 'selenium-webdriver';
import { Fotografo } from './fotografo';
import { Fotografia } from './fotografia';

export class Richiesta {
    id:number;
    nome: string;
    cognome:string;
    email:string;
    fotoRichieste:Fotografia[];
}