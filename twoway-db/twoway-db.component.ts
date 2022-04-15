import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-db',
  templateUrl: './twoway-db.component.html',
  styleUrls: ['./twoway-db.component.css']
})
export class TwowayDBComponent implements OnInit {
  inputData:string = "Ibase"
  cityData:string = "Amravati"
  emailData:string = "Ibase@gmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
