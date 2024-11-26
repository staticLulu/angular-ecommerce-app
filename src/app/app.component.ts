import { Component, ElementRef, inject, ViewChild,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIResponseModel, Customer, LoginModel } from './model/Product';
import { FormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ecommerce-app';
  registerObj: Customer = new Customer();
  loginObj: LoginModel = new LoginModel();
  masterService = inject(MasterService);

  @ViewChild("registerModel") registerModel: ElementRef | undefined;
  @ViewChild("registerModel") loginModel: ElementRef | undefined;

  openRegisterModel() {
    if(this.registerModel) {
      this.registerModel.nativeElement.style.display = "block"

    }
  }

  closeRegisterModel() {
    if(this.registerModel) {
      this.registerModel.nativeElement.style.display = "none"
    }
  }

  onRegister() {
    this.masterService.registerNewCustomer(this.registerObj).subscribe((res: APIResponseModel) => {
      if(res.result){
        alert("Registration Success");
        this.closeRegisterModel();
      } else {
        alert(res.message)
      }
    })
  }

  openLoginModel() {
    if(this.loginModel) {
      this.loginModel.nativeElement.style.display = "block"

    }
  }

  closeLoginModel() {
    if(this.loginModel) {
      this.loginModel.nativeElement.style.display = "none"
    }
  }
  
}
