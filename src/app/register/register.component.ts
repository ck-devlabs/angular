import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName:string='';
  lastName:string='';
  gender:string='';
  hideDetails:boolean=true;
  hideMe:boolean=true;

  displayDetails:string="";

  submitDetails(event: Event){
    this.hideMe = false;
  }

  submitPage(){
    this.displayDetails = 'The First Name is :> '+ 
      this.firstName +' The Last Name is :> '+ 
      this.lastName +' The Gender is :> '+ this.gender;
  }

}
