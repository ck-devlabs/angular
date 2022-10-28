import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOutMe: displayNotification}">
                <p class="notification-p">This website uses cookies</p>
                <div class="close">
                    <button 
                      type="button" 
                      class='btn' 
                      aria-label="Close"
                      (click)="closeCacheMessage()"
                      >X</button>
                </div>
              </div>`,
  styles: ['div{margin: 10px 0px; padding: 10px 20px; text-align:center}',
    '.notification-p{font-size:15px}',
    '.close{float:right; margin-top:-50px}',
    '.fadeOutMe{opacity:0; -webkit-transition: opacity 0.15s linear; -moz-transition: opacity 0.15s linear; -o-transition: opacity 0.15s linear; transition: opacity 0.15s linear; }']


})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification : boolean = false;

  closeCacheMessage(){
      this.displayNotification = true;
  }

}
