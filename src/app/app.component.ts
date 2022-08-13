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

    const auxMap = [1,2,3,4,5,10].map(num => num*2)
    console.log('auxMap effect', auxMap);

    const auxFind = [1,2,3,4,5,10].find(num => num === 10)
    console.log('auxFind effect:', auxFind);

    const auxIndexOfString = "indexOf test".indexOf("test")
    console.log('auxIndexOfString effect:', auxIndexOfString);

    const auxFilter = [1,2,3,4,5,10].filter(num => num % 2 === 0)
    console.log('auxIndex effect:', auxFilter);

    const auxJoin = [1,2,3,4,5,10].join(' - ')
    console.log('auxJoin effect:', auxJoin);
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
