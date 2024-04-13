import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './service/product.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'product store';
  loading = false
  products$: Observable<IProduct[]>

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAllProduct().pipe(
      tap(() => this.loading = false )
    );
  }
}
