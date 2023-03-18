import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Debt } from '../models/debt';

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

   constructor(private fb: FormBuilder) { }
   //chose to use ngOnIt to ensure component and template 
   //are initialized before building the form model
  ngOnInit(): void {
    this.debtForm = this.fb.group({
      debts: this.fb.array([this.buildGroup()])
    });

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

}

