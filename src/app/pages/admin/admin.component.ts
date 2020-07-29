import { Component, OnInit } from '@angular/core';
//importing the product service so that we can send the post request
import { ProductsService } from '../../services/products.service';

//import the add product model
import { ProductModel } from '../../models/product-model';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products: any;
  constructor(private productService: ProductsService , private router:Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((res: ProductModel[]) => {
      this.products = res;
      this.productService.setProductArray(res);
      //console.log(this.products);
    });
  }

  deleteProduct(prodId){
    console.log(prodId);
    this.productService.deleteproduct(prodId).subscribe((res: ProductModel[])=>{
      //console.log(res);
      this.products = res;
      this.productService.setProductArray(res);
    });
  }

  editProduct(product){
    this.router.navigate(['/add-product/',product._id]);
  }
}
