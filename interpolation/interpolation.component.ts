import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  
    student:any = {
      sname:"Rahul",
      scity:"Delhi",
      semail:"Rahul@gmail.com",
      surl:"https://pluspng.com/img-png/software-developer-png-computer-software-engineer-320.png"
    }

    inputData:string = ""

    sendData(event:any):void {
      // alert(event.target.value)
     
      // console.log(event.target.value)
      this.inputData = event.target.value
      console.log(this.inputData)
    }

       changeDataToSneha():void {

            this.student = {
              sname:"Sneha Reddy",
              scity:"Banglore",
              semail:"SnehaReddy@gmail.com",
              surl:"https://th.bing.com/th/id/R.4824d3604880a945a615e0b8622bebeb?rik=fGpAJSpKwD%2f5WA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1232398.jpg&ehk=%2fnnYevvdfy2LAjvPN66NR%2btBRKGfJUHW018Hzr7O6PE%3d&risl=&pid=ImgRaw&r=0"
            }
       }
         changeDataToRahul():void {
             this.student = {
      sname:"Rahul",
      scity:"Delhi",
      semail:"Rahul@gmail.com",
      surl:"https://pluspng.com/img-png/software-developer-png-computer-software-engineer-320.png"
    }
         }

  constructor() { }

  ngOnInit(): void {
  }

}
