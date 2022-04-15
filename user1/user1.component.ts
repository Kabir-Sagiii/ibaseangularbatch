import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../Services/user-data.service'

interface IProduct {
  id:number,
  title:string,
  price:number,
  description:string,
  image:string,
  rating:any,
  category:string
}

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})

export class User1Component implements OnInit {
  mydata:any = []
  user1Data:string = ""
  serverData:IProduct = {
    id:0,
    title:"",
    description:"",
    category:"",
    price:0,
    image:"",
    rating:{}
  }
  constructor(private userService:UserDataService) { }

  sendDataToService() {
    // alert(this.user1Data)
    this.userService.userData = this.user1Data
    this.serverData = this.userService.serverData
    
  }

  ngOnInit(): void {
   this.mydata = this.userService.user
   this.userService.serverCall()
   
   
  }


}
