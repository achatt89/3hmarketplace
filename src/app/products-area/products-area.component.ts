import { Component, OnInit } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';
import { MarketplaceCrudService } from '../service/marketplace-crud.service';
import { Product } from '../interface/product';

@Component({
  selector: 'marketplace-products-area',
  templateUrl: './products-area.component.html',
  styleUrls: ['./products-area.component.css'],
  providers: [NgbNavConfig]
})
export class ProductsAreaComponent implements OnInit {

  copyProduct = false;
  productList: Product[];
  constructor(config: NgbNavConfig, public marketplaceCrudService: MarketplaceCrudService) {
  }

  ngOnInit(): void {
    this.marketplaceCrudService.fetchProducts().subscribe(data => {
      this.productList = data.map(res => {
        return {
          id: res.payload.doc.id,
          ...res.payload.doc.data() as Product
        };
      });
    });

    this.copyProducts();
  }

  copyProducts() {
    if (this.copyProduct) {
      let product = [];
      this.marketplaceCrudService.fetchProducts().subscribe(data => {
        product = data.map(res => {
          return {
            id: res.payload.doc.id,
            ...res.payload.doc.data() as Product
          }
        });

        product.forEach(item => {
          this.marketplaceCrudService.addProduct('new-items', item);
        })
      });
    }
  }

}
