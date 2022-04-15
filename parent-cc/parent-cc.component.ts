import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-cc',
  templateUrl: './parent-cc.component.html',
  styleUrls: ['./parent-cc.component.css']
})
export class ParentCCComponent implements OnInit {

  parentData:string=''
  childData:string = ''
  constructor() { }

  sendDataToChild(inputRef:any){
      // alert(inputRef.value)
      this.parentData = inputRef.value
  }
   getDataFromChild(value:any){
     this.childData = value

   }

  ngOnInit(): void {
  }

}
