import { Component, OnInit } from '@angular/core';
//importing the product service so that we can send the post request
import { ProductsService } from '../../services/products.service';

//import the add product model
import { ProductModel } from '../../models/product-model';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productModel = new ProductModel();
  productID: string;
  button_text = "Add Product";
  constructor(private productService: ProductsService, private router: Router) { }


  ngOnInit(): void {
    this.productID = this.router.url.split('/')[2];
    if (this.productID) {
      const products = this.productService.getProductArray();
      products.forEach(product => {
        if (product._id === this.productID) {
          this.productModel = product;
          this.button_text = "Update";
        }
      });
    }
  }

  addNewProduct() {
    if (this.productID) {
        this.productService.updateProduct(this.productModel).subscribe((products:ProductModel[])=>{
          this.productService.setProductArray(products);
        })
    }
    else {
      console.log(this.productModel);
      this.productService.addNewProduct(this.productModel).subscribe(result => {
        //console.log(result);
      });
    }
    this.router.navigate(['/admin']);
  }

}
