export interface APIResponseModel {
  message: string,
  result: boolean,
  data: any,
}

export interface Category {
  categoryId: number,
  categoryName: string,
  parentCategoryId: number,
  userId: number,
}

export class Customer {
  CustId: number;
  Name: string;
  MobileNo: string;
  Password: string;

  constructor() {
    this.CustId = 0;
    this.MobileNo = '';
    this.Name = '';
    this.Password = '';
  }
}

export class LoginModel {
  UserName: string;
  UserPassword: string;
  constructor() {
    this.UserName = '';
    this.UserPassword = '';
  }
}

export interface ProductList {
  productId: number
  productSku: string
  productName: string
  productPrice: number
  productShortName: string
  productDescription: string
  createdDate: string
  deliveryTimeSpan: string
  categoryId: number
  productImageUrl: string
  categoryName: string
}
