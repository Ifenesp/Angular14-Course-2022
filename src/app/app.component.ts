import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-Angular';

  constructor()
  {
    console.log('wena perro');
  }

  public getName(name: string): string
  {
    return "hi" + name;
  }

  //ejemplos funcion flecha
  //const getName = (name: string) => {return "hi" + name}
  //const getName = (name: string) => "hi" + name
  //const getName = () => "hi"
  //const getNam1 = (name: string, lastName: string) => lastname
 }
