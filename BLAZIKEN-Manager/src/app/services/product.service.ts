import { Injectable } from '@angular/core';
import { ProductAPIService } from './product-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private ProductAPI: ProductAPIService,
    private router: Router
  ) { }

  // tratar imagens  e fazer o registro

    registerProduct(name: string, price: number, base64Image: string){

      let product = {
        name: name.toUpperCase().trim(),
        price: price,
        base64Image: base64Image
      }

      this.ProductAPI.createProduct(product).subscribe({
        next: response => {
          console.log('Product created successfully:', response)
          alert('Product Registered Successfully!')
          //this.router.navigate([""])
        }, 
        error: error => {
          console.error('Error creating user:', error);
          alert('Error registering user');
        }
      });

    }


}
