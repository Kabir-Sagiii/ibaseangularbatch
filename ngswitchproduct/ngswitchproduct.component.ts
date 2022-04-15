import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchproduct',
  templateUrl: './ngswitchproduct.component.html',
  styleUrls: ['./ngswitchproduct.component.css']
})
export class NgswitchproductComponent implements OnInit {
  productDetails:any = {}
  type:string = ''
  constructor() { }

  changeType(typeValue:string){
this.type = typeValue
  }

  ngOnInit(): void {
       fetch('https://fakestoreapi.com/products/1').then((res)=>{
              return  res.json()
       }).then((data)=>{
            console.log(data)
            this.productDetails = data
       })
  }

}
