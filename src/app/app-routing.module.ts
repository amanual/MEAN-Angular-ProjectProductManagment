import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditComponent } from './edit/edit.component';
import { CreationComponent } from './creation/creation.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'products/new', component: CreationComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
