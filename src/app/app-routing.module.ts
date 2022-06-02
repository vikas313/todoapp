import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { HistoryComponent } from './history/history.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
const routes: Routes = [
    {path:"",component:AddtodoComponent},
    {path:"addtodo",component:AddtodoComponent},
   {path:'history',component:HistoryComponent},
   {path:'**',component:NoPageFoundComponent}
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}