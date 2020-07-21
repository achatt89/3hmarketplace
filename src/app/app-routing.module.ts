import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

import { ProductUploadComponent } from './admin/product-upload/product-upload.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'product-upload', component: ProductUploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
