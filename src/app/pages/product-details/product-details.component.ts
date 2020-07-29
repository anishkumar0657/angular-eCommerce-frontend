import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productID: string;
  product: ProductModel;
  productModel = new ProductModel();
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productID = this.router.url.split('/')[2];
    const products = this.productService.getProductArray();
    console.log(products);
    products.forEach(product => {
      if (product._id === this.productID) {
        this.productModel = product;
        console.log(product);
      }
    });
  }
}
