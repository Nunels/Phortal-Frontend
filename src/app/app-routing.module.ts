import { NgModule } from '@angular/core';
import { ComportamentaleComponent } from '../app/pages/comportamentale/comportamentale.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { RegistrazioneComponent } from '../app/pages/registrazione/registrazione.component';
import { Routes, RouterModule } from '@angular/router';
import { FotografiComponent } from './pages/fotografi/fotografi.component';

const routes: Routes = [
        {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'comportamentale',
        component: ComportamentaleComponent,
    },
    {
        path: 'registrazione',
        component: RegistrazioneComponent,
    },
    {
        path: 'fotografi',
        component: FotografiComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
