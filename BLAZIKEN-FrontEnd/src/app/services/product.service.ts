import { Injectable } from '@angular/core';
import { ProductAPIService } from './product-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: any

  constructor(
    private productAPI: ProductAPIService
  ) { 
    this.loadProduct()
  }

  loadProduct(){
    this.productAPI.getProduct().subscribe((data: Object) => {
      this.products = data
      console.log(this.products)
    });
  }

}
