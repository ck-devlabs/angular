import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayValue: string="";
  

  searchDetails(event: Event)
  {
    // console.log((<HTMLInputElement>event.target).value);
    this.displayValue = (<HTMLInputElement>event.target).value;
  }
}
