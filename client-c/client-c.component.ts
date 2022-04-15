import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-client-c',
  templateUrl: './client-c.component.html',
  styleUrls: ['./client-c.component.css']
})
export class ClientCComponent implements OnInit {

   clientData:string = ''
    @Input() serverData:string = ''
    @Output() clientEvent = new EventEmitter()


  constructor() { }
  getClientData(client:any){
        //  alert(client.value)
         this.clientData = client.value
         this.clientEvent.emit(this.clientData)
         client.value = ''
  }

  ngOnInit(): void {
  }

}
