import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriadorComponent } from './pages/criador/criador.component';
import { HomeComponent } from './pages/home/home.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'criador', component: CriadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
