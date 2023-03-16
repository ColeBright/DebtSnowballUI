import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Debt } from '../models/debt';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {
   debtForm!: FormGroup;
   debt: Debt = new Debt();
   //chose to use ngOnIt to ensure component and template 
   //are initialized before building the form model
  ngOnInit(): void {
    this.debtForm = new FormGroup({
      id: new FormControl(),
      balance: new FormControl(),
      payment: new FormControl()
    });
  }

  simulateAndSave(){
    return;
  }

}
