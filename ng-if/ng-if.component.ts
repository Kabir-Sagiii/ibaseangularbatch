import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  showImage:boolean = false
     product:any = {
       name:"Iphone 13",
       price:110000,
       image:"https://www.concept-phones.com/wp-content/uploads/2021/04/iphone-13-12s-render-coverpigtou-april-2021-3.jpg"
     }
     changeData(e:any) {
       this.showImage = e.checked

     }
  constructor() { }

  ngOnInit(): void {
  }

}
