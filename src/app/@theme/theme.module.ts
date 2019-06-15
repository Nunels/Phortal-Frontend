import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatTableModule, MatTabsModule, MatToolbarModule, MatAutocompleteModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [],
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        MatTableModule, MatTabsModule, MatToolbarModule, MatIconModule, MatAutocompleteModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        MatTableModule, MatTabsModule, MatToolbarModule, MatIconModule, MatAutocompleteModule],
    providers: [],
})
export class ThemeModule { }
