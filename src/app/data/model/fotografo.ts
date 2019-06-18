import { logging } from 'selenium-webdriver';
import { Fotografia } from './fotografia';

export class Fotografo{
    id:number;
    nome:string;
    cognome:string;
    fotografie:Fotografia[];
}