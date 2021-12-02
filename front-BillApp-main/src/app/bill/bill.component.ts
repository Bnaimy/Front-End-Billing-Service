import { BillService } from './../services/bill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bills:any ;

  constructor(private billservice : BillService) { }

  ngOnInit(): void {
    this.getAllbills();
  }

  getAllbills(){
    
    this.billservice.getAllBills().subscribe(
      data => {
        this.bills = data._embedded.bills;
        console.log(this.bills);
      },
      err => {

        alert(err.error.message);
      }
    )
  }
}
