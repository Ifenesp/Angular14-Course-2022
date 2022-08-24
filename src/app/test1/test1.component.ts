import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit, OnChanges, DoCheck {

  @Input() name!: string;
  @Input() lastName: string="Espinoza";

  constructor() 
  {
    console.log('constructor')   
  }

  //se activa en cada cambio
  ngOnChanges(changes: SimpleChanges) :void
  {
    console.log('on changes', changes)
  }

  //se activa al inicio solo una vez
  ngOnInit():void 
  {
    console.log('on init')
  }

  //se inicia despues de cada OnChanges y despues del OnInit
  ngDoCheck():void
  {
    console.log('on do check')
  }

  

}