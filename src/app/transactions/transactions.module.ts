import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TrasactionsListComponent } from './trasactions-list/trasactions-list.component';

@NgModule({
  declarations: [ TrasactionsListComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ TrasactionsListComponent ]
})
export class TransactionsModule { }
