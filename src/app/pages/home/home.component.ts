import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
//import the add product model
import { ProductModel } from '../../models/product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:ProductModel[]=[];

  constructor(private productService: ProductsService,private router :Router) {
  }

  ngOnInit() {
    this.getProducts();
    
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((res:ProductModel[]) => {
      this.products = res;
      this.productService.setProductArray(this.products);
    });
  }

  showDetails(prod:ProductModel){
    this.router.navigate(['/product-details',prod._id]);
  }

  addToCart(product:ProductModel){
    this.productService.addToCart(product).subscribe(res=>{
      console.log(res);
    });
  }
}
