import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:any;

  constructor(private clientservice : ClientService) { }

  ngOnInit(): void {
    this.getAllclients();
  }

  getAllclients(){
    
    this.clientservice.getAllClients().subscribe(
      data => {
        this.clients = data._embedded.customers;
        console.log(this.clients);
      },
      err => {

        alert(err.error.message);
      }
    )
  }

}
