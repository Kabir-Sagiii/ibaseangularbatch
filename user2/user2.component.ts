import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../Services/user-data.service'
@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
    myowndata:any = []
    userDataFromService:string = "No Data"
  constructor(private uds:UserDataService) { }

   getDataFromService() {
    //  alert(this.uds.userData)
    this.userDataFromService = this.uds.userData
   }
    
       
  ngOnInit(): void {
    this.myowndata = this.uds.user
  }

}
