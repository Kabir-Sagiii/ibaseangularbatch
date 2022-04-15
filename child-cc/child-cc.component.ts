import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child-cc',
  templateUrl: './child-cc.component.html',
  styleUrls: ['./child-cc.component.css']
})
export class ChildCCComponent implements OnInit {

 @Input() dataCameFromParent:string = ''
  @Output()  customEvent = new EventEmitter()
  constructor() { }

  sendDataToParent(inputRef:any) {
     this.customEvent.emit(inputRef.value)
  }

  ngOnInit(): void {
  }

}
