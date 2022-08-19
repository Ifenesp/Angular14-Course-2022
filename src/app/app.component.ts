import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-Angular';
  
  //en este caso el ! sirve para inicializar la variable person sin datos declarados
  public person!: IPerson;

  public student: string = 'example Nefi';

  public a: number= 0;
  public b: number= 0;

  getPrint(event:IPerson)
  {
    console.log('parent component effect:', event)
    this.person = event;
  }
}
