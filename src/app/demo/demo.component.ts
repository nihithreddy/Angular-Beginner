import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message:string = "Welcome from Demo Component";
  flag:boolean = true;
  str:string = "Angular 9.0";
  num1:number = 0;
  num2:number = 0;
  res:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ButtonOnClick() {
    this.flag = !this.flag;
  }

  onAddClick() {
    this.res = this.num1 + this.num2;
  }

}
