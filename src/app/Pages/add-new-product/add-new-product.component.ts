import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { UploadImageComponent } from '../upload-image/upload-image.component';
@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,UploadImageComponent],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent {
product:Product;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router)
{
  this.product = new Product();
}

addProduct()
{
  this.product.uploadImg = localStorage.getItem('uploadImg');
  console.log(this.product);
  // const userId = localStorage.getItem('userID');
  this.product.userID = Number(localStorage.getItem('userId'));
  this.http
  .post('http://localhost:5007/api/Product/AddNewProduct',this.product,this.httpOptions)
  .subscribe((response) =>
  {
    console.log(response);
  });
  this.router.navigateByUrl('supplier-dashboard/get-all-supplier-products');

}
}
