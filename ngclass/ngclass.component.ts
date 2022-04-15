import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
   switchMode:string ="Switch to Dark Mode"
  constructor() { }

  changeSwitchMode(switchRef:any){
    // alert("working")
    if(switchRef.value){
      this.switchMode = "Switch Back to Light Mode"
    } else {
      this.switchMode = "Switch to Dark Mode"
    }
  }

  getInputRef(inputRef:any){
      console.log(inputRef.value)
      console.log(inputRef.valid)
  }

  ngOnInit(): void {
  }

}
