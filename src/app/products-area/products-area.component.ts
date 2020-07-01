import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'marketplace-products-area',
  templateUrl: './products-area.component.html',
  styleUrls: ['./products-area.component.css'],
  providers: [NgbTabsetConfig]
})
export class ProductsAreaComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit(): void {}

}
