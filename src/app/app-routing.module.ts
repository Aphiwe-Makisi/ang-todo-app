import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ViewComponent } from './components/view/view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'add-todo', component: AddComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'view-todo/:id/:title', component: ViewComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
