import { Component, OnInit } from '@angular/core';

class TransactionModel {
  
  value: Number;
  
  time: string;
  
  description: string;

  constructor(description: string, value: Number, time: string) {
    this.time = time;
    this.value = value;
    this.description = description;
  }
}

@Component({
  selector: 'app-trasactions-list',
  templateUrl: './trasactions-list.component.html',
  styleUrls: ['./trasactions-list.component.scss'],
})
export class TrasactionsListComponent  implements OnInit {

  transactions : Array<TransactionModel> = [];

  constructor() { }

  ngOnInit() {
    this.transactions.push(
      // { description: "Posto FI", value: 23.20, time: DateTime.now() }
    )
  } 
}
