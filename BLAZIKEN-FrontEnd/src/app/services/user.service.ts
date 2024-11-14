import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { UserAPIService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private users: any
  private sessao: any

  constructor(
    private UserAPI: UserAPIService,
    private router: Router
  ){
    this.loadUsers()

    
  }

  loadUsers(){
    this.UserAPI.getUser().subscribe((data: Object) => {
      this.users = data
      console.log(this.users)
    });
  }


  // Verifica se o nome está no formato desejado
  checkName(name: string){
    if(name.length > 2){
      return true
    } else {
      alert('Invalid Name!');
      return false
    }
  }

  // Verifica se o Email está no formato desejado
  checkEmail(email: string){
    const left = email.substring(0, email.indexOf("@"));
    const right = email.substring(email.indexOf("@") + 1, email.length);
    if (
        email.search("@") != -1 && 
        left.length >= 1 &&
        left.search("@") == -1 &&
        left.search(" ") == -1 &&
        right.length >= 3 &&
        right.search("@") == -1 &&
        right.search(" ") == -1 &&
        right.search(".") != -1
        ){
        return true
    } else {
      alert('Invalid Email!');
        return false
    }
  }

  // Verifica se as senhas conicidem
  checkPassword(password: string, passwordConfirm: string){
    if(password == passwordConfirm){
      return true
    } else {
      alert('Passwords do not match!');
      return false
    }
  }

  async register(name: string, email: string, password: string, passwordConfirm: string){

    let user = {
      name: name.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: password,
      passwordConfirm: passwordConfirm,
    }

    if (this.checkName(user.name) == true && this.checkEmail(user.email) == true && this.checkPassword(user.password,user.passwordConfirm) == true){
      
      let _user = {
        name: user.name,
        email: user.email,
        password: user.password
      }

      this.UserAPI.createUser(_user).subscribe({
        next: response => {
          console.log('User created successfully:', response)
          alert('User Registered Successfully!')
          this.router.navigate(["login"])
        }, 
        error: error => {
          console.error('Error creating user:', error);
          alert('Error registering user');
        }
      });

    } else {
      alert('Check the data provided');
    }
  } 
  
  // Verifica se o email esta cadastrado e se tiver retorna o index dele
  findRegister(email: string){

    let index: number = 0;
    let find: boolean = false;

    for (let i = 0; find == false && i < this.users.length; i++){
      if (this.users[i].email == email){
        find = true;
        index = i;
      } else{
        index = -1;
      }
    }
    return index
  }

  
  login(email: string, senha: string){
    
    if(this.findRegister(email) != -1){
      let index = this.findRegister(email)
      if(this.users[index].password == senha){
        this.sessao = this.users[index]
        alert('Login Successful!');
        this.router.navigate([""])
        console.log(this.sessao)
        
      } else{
        alert('Incorrect password');
      }
    } else if (this.checkEmail(email)){
      alert('Email not registered!')
    } 
  }

}
