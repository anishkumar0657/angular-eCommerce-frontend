import { Injectable } from '@angular/core';

import { WebServiceService } from './web-service.service';
import {ProductModel} from '../models/product-model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:ProductModel[] =[];

  constructor(private webService: WebServiceService) {

  }
  // calling the get method in the webservice
  getAllProducts() {
    return this.webService.get('getAllProducts');
  }

  addNewProduct(payload: ProductModel) {
    return this.webService.post('admin/addNewProduct',payload);
  }

  deleteproduct(productID: any){
    return this.webService.delete(`admin/deleteProduct/${productID}`);
  }

  updateProduct(product: ProductModel){
    return this.webService.update('admin/updateProduct',product);
  }

  //update the product array whenever product is added or removed from db
  setProductArray(products:ProductModel[]){
    this.products = products;
  }

  addToCart(product:ProductModel){
    return this.webService.post('addToCart',product);
  }

  getProductArray(){
    return this.products;
  }
}
