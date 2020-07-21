import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { MarketplaceCrudService } from './service/marketplace-crud.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SpecialCategoriesComponent } from './special-categories/special-categories.component';
import { ProductsAreaComponent } from './products-area/products-area.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductUploadComponent } from './admin/product-upload/product-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SpecialCategoriesComponent,
    ProductsAreaComponent,
    ProductInfoComponent,
    ProductPageComponent,
    FooterComponent,
    HomePageComponent,
    ProductUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module
    AngularFireDatabaseModule,  // Firebase database module
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [MarketplaceCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
