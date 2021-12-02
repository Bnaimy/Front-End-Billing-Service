import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data._embedded.products;
        console.log(this.products);
      },
      err => {

        alert(err.error.message);
      }
    )
  }

}
