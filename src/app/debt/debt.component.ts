import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Debt } from '../models/debt';
import { DebtServiceService } from './debt-service.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {
   debtForm!: FormGroup;
   debt: Debt = new Debt();

   get debts(): FormArray{
    return <FormArray>this.debtForm.get('debts');
   }

   constructor(private fb: FormBuilder, private debtService: DebtServiceService) { }
   //chose to use ngOnIt to ensure component and template 
   //are initialized before building the form model
  ngOnInit(): void {
    this.debtForm = this.fb.group({
      debts: this.fb.array([this.buildGroup()])
    });

    this.getDebts();
  }

  getDebts(): void {
    this.debtService.getDebts()
    .subscribe({
      next: (debt: Debt[]) => this.displayDebt(debt)
    })
  }

  simulateAndSave(){
    return;
  }

  buildGroup(): FormGroup {
    return this.fb.group({
       id: ['',[Validators.required]],
       balance: ['',[Validators.required]],
       payment: ['',[Validators.required]]
    });
  } 

  addDebt(): void {
    this.debts.push(this.buildGroup());
  }

  displayDebt(debt: Debt[]): void {
    if(this.debtForm) {
      this.debtForm.reset();
    }
    for(let i =0; i < debt.length; i++){
      debtChunk: FormGroup;
      const debtChunk = this.fb.group({
       id: ['',[Validators.required]],
       balance: [debt[i].balance,[Validators.required]],
       payment: [debt[i].payment,[Validators.required]]
     });
     this.debts.push(debtChunk);
    }
  }

}

