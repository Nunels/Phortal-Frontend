import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements OnChanges {
    // Mappa base popolata solo una volta nell'init
    @Input() baseMap: Map<string, Array<string>>;
    @Input() label: string;
    @Input() inputControl: string;
    @Input() parentForm: FormGroup;
    // lista utilizzata per evitare l'errore sull'ngFor (le Map ad oggi non sono supportate correttamente)
    listLetter: string[] = [];

    //  filtrate in base al valore inserito nel campo regione
    mapFiltered = new Map<string, Array<string>>();

    ngOnChanges() {
        this.mapFiltered = this.baseMap;
        this.listLetter = Array.from(this.mapFiltered.keys());
    }

    filterAutocomplete(value: string) {
        this.mapFiltered = this._filterMap(value);
        this.listLetter = Array.from(this.mapFiltered.keys());
    }

    private _filter = (opt: string[], value: string): string[] => {
        return opt.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

    private _filterMap(value: string): Map<string, Array<string>> {
        var tempMap = new Map<string, Array<string>>();
        if (value) {
            this.baseMap.forEach((v, k) => {
                // Recupero la lista delle  filtrate e creo un nuovo array
                // Array di stringhe in base a queste 
                var names = this._filter(v, value);
                if (names.length > 0) { tempMap.set(k, Array.from(names)); }
            })
        }
        else {
            return this.baseMap;
        }
        return tempMap;
    }

}
