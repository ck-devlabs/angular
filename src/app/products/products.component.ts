import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  products = [
    {id:1, name:'Apple', price:2000, color:'black',available:'Available'},
    {id:2, name:'Android', price:1000, color:'red',available:'Not Available'},
    {id:3, name:'Google', price:5000, color:'yellow',available:'Available'},
    {id:4, name:'Samsung', price:9000, color:'green',available:'Sold Out'},
  ]


}
