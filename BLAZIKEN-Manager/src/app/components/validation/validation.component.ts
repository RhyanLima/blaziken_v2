import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

  constructor(
    private router: Router
  ){}

  public Manager: any = {
    user: undefined,
    password: undefined,
  }

  enter(user: string, password: string){
    if (user == "teste" && password == "teste"){
      this.router.navigate(["register"])
    }
  }

}
