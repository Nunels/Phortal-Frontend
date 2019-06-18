import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FotografiComponent } from './pages/fotografi/fotografi.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';

const routes: Routes = [
        {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
    },
    {
        path: 'carrello',
        component: CarrelloComponent,
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
