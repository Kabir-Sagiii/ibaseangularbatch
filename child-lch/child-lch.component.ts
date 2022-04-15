import { Component, OnInit,Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-lch',
  templateUrl: './child-lch.component.html',
  styleUrls: ['./child-lch.component.css']
})
export class ChildLCHComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy{

    @Input() data:string = ""

  constructor() { 

    console.log("Concstructor is called")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentinit is called")
  }
  ngAfterContentChecked(): void {
     console.log("ngAfterContentcheked is called")
   
   
  }
    ngAfterViewChecked(): void {
            console.log("ngAfterViewcheked is called")
    }
    ngAfterViewInit(): void {
           console.log("ngAfterViewInit is called")
    }
    ngDoCheck(): void {
      console.log("ngdocheck is called")
    }
  ngOnChanges(): void {
     console.log("ngOnchanges is called")
  }
  
 ngOnDestroy(): void {
   console.log("ngonDestroy is called")
 }
  ngOnInit(): void {
     console.log("ngOnInit is called")
  }
     
}
