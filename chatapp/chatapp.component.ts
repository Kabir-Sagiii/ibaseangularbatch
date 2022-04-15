import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {
  dataOfClient:string =''
  dataOfServer:string = ''
  constructor() { }

  getDataFromClientComponent(data:any){
   this.dataOfClient = data
  //  alert(this.dataOfClient)
  }
  getDataFromServerComponent(data:any){

    this.dataOfServer = data
    // alert(this.dataOfServer)
  }

  ngOnInit(): void {
  }

}
