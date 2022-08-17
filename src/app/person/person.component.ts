import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  //Definicion de un Input
  @Input() name: string = "";
  @Input() lastName: string = "";
  @Input() age: number = 0;


  //Definicion de un Output
  @Output() print = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  onPrint(event:any)
  {
    this.print.emit("hola")
  }
}