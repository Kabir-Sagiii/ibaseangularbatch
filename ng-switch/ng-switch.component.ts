import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
   wish:string = 'Wish Me Please'
  constructor() { }

  changeWish(wishMessage:string) {
      this.wish = wishMessage
  }

  ngOnInit(): void {
  }

}
