import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-lch',
  templateUrl: './parent-lch.component.html',
  styleUrls: ['./parent-lch.component.css']
})
export class ParentLCHComponent implements OnInit {
pdata:string =""
status:boolean = true
  constructor() { }

  changeStatus(){
    this.status = false
  }

  getData(value:any){
     this.pdata = value.value
  }
  ngOnInit(): void {
  }

}
