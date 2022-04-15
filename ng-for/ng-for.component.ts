import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  showRow:boolean = false
  showButton:boolean = false
   Products :any[] = [
     {
       brand:"Apple",
       model:"Iphone 13 Pro",
       price:110000,
       rating: 5
     },
     {
        brand:"Apple",
       model:"Iphone 12",
       price:9000,
       rating: 4
     },
     {
        brand:"Oneplus",
       model:"oneplus 9Pro",
       price:70000,
       rating: 4.5
     },
     {
        brand:"Vivo",
       model:"Vivo A23",
       price:50000,
       rating: 4
     },
     {
        brand:"Apple",
       model:"Iphone 11 Pro",
       price:90000,
       rating: 4.5
     }

   ]

     changeStatus() {
       this.showRow = true
       this.showButton = true
     }
     changeStatusAgain() {
       this.showRow = false
       this.showButton = false
     }

  constructor() { }

  ngOnInit(): void {
  }

}
