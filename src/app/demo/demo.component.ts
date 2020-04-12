import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  message:string = "Welcome from Demo Component";
  constructor() { }

  ngOnInit(): void {
  }
  ButtonOnClick(): void{
    alert("You Clicked the button");
  }

}
