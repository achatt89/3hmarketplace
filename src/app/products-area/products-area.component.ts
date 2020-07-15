import { Component, OnInit} from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'marketplace-products-area',
  templateUrl: './products-area.component.html',
  styleUrls: ['./products-area.component.css'],
  providers: [NgbNavConfig]
})
export class ProductsAreaComponent implements OnInit {

  constructor(config: NgbNavConfig) {
  }

  ngOnInit(): void {}

}
