import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatTableModule, MatTabsModule, MatToolbarModule, MatAutocompleteModule, MatCardModule, MatCard, 
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [],
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        MatTableModule, MatTabsModule, MatToolbarModule, MatIconModule, MatAutocompleteModule,MatCardModule,MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        MatTableModule, MatTabsModule, MatToolbarModule, MatIconModule, MatAutocompleteModule,MatCardModule,MatIconModule],
    providers: [],
})
export class ThemeModule { }
