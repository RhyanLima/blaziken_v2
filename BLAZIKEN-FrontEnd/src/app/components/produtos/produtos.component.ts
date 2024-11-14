import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {


  constructor(
    public carrinhoService: CarrinhoService,
    public productService: ProductService
  ){}


  public p: number = 1;

}
