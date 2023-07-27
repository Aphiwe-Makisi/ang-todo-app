import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-todo', component: AddComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'view-todo', component: ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
