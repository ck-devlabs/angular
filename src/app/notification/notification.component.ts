import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success"><p class="notification-p">This website uses cookies</p></div>`,
  styles: ['div{margin: 10px 0px; padding: 10px 20px; text-align:center}',
    '.notification-p{font-size:15px}']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
