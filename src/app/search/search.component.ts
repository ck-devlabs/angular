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

  searchValue: string="Iphone";
  

  searchDetails(event: Event)
  {
    // console.log((<HTMLInputElement>event.target).value);
    this.searchValue = (<HTMLInputElement>event.target).value;
  }
}
