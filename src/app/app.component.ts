import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'product store';
  products: IProduct[] = []

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(productItem => {
        this.products = productItem;
    })
  }
}
