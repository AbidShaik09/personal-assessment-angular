import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBookComponent } from './show-book/show-book.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  { path:'showbook',component:ShowBookComponent},
  { path:'addbook',component:AddBookComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
