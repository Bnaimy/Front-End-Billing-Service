import { BillService } from './../services/bill.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  bill : any = {
    customer : {}
  };
  id: number =0;
  productItems = [];
  prixTotal = 0 ;

  constructor(private route: ActivatedRoute , private billService : BillService) { }

  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.getDataUser(this.id);
    
  }

  getDataUser(id : any) {
    this.billService.getOneBill(id).subscribe(
      data => {
        
        this.bill = data;
        for(var p of this.bill.productItems){
          let prix = p.quantity*p.price;
          this.prixTotal += prix ;
        }
        //this.productItems = bill.
        console.log(this.bill)
      }
    )
  }

}
