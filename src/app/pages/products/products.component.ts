import { map, Observable, Subscription } from 'rxjs';
import { APIResponseModel, Category, ProductList } from '../../model/Product';
import { MasterService } from './../../service/master.service';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {

  productList = signal<ProductList []>([]);
  categoryList$: Observable<Category[]> = new Observable<Category[]>();
  subscriptionList: Subscription[] = [];
  masterService = inject(MasterService);

  ngOnInit():void {
    this.loadAllProducts();
    this.categoryList$ = this.masterService.getAllCategory().pipe(map(item => item.data))
  }

  getProductByCategory(id: number) {
    this.masterService.GetAllProductsByCategoryId(id).subscribe((res: APIResponseModel)=>{
      this.productList.set(res.data);
    })
  }

  loadAllProducts() {
    this.subscriptionList.push(this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.productList.set(res.data);
    })) 
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe();
    })
  }
}
