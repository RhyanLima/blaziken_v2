import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    public productService: ProductService
  ){}

  public Product: any = {
    name: undefined,
    price: undefined,
    base64Image: undefined,
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.Product.base64Image = e.target.result;
      }; 
      reader.readAsDataURL(file);
    }
  }


}
