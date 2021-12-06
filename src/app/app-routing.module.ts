import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseeditsComponent } from './appadmin/databaseedits/databaseedits.component';

const routes: Routes = [
  {path: '' ,  component:DatabaseeditsComponent },
  {path: 'adminedit' ,  component:DatabaseeditsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
