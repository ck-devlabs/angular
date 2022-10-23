import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  iphone ='This is an iphone 14 Pro Max card ';
  iphoneSource :string ='https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg';

}
