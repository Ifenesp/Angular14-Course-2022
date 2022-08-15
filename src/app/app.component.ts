import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'Test-Angular';

  constructor()
  {
    //operartor splice
    const A = ['a','b','c','d','e'];
    const auxSplice = A.splice(1,1);
    console.log ("auxSplice effect:", A, auxSplice);

    //operator reduce
    const auxReduce = [1,2,3,4,5].reduce((prev, value, index)=> 
    {
      console.log(prev, value,index)
      return prev + value
    }, 0)
    console.log('auxReduce effect;', auxReduce);

    //prev: valor previo a la suma
    //value: valor del espacio del array
    //index: posicion de la variable del array

    //JSON operators

    const auxJSON =
    {
      id: 1,
      name: "Nefi",
      lastName: "Espinoza"
    };

    //Entries, Key, Value

    const auxEntries = Object.entries(auxJSON)
    console.log('auxEntries effect:', auxEntries)
    //Entries crea un array de arrays con los valores del objeto

    const auxKeys = Object.keys(auxJSON)
    console.log('auxKeys effect:', auxKeys)
    //Keys crea un array con los valores clave del objeto

    const auxValues = Object.values(auxJSON)
    console.log('auxValues effect:', auxValues)
    //Values crea un array con los valores del objeto


    //Spread operator
    const B = [1,2,3,4,5,6];
    const C = [...B,7,8,9,10];
    console.log('spread effect:', C)

    //Rest operator paso de parametros
    this.getRest(...C, 'test');

    //JSON person tiene un JSON country dentro
    const person = 
      {
        id: 1,
        name: 'nefi',
        country: 
        {
          id: 1,
          cod: 'cl'
        }
      };

    //Desestructuracion de los array de un JSON
    const {country} = person;
    console.log('country array from JSON person:', country);



    //JSON ejemplo para ejercicio
    const data = 
    {
      0:
      {
        id: 1,
        name: 'Nefi',
        age: 30
      },
      1:
      {
        id: 2,
        name: 'Nefi 2',
        age: 35
      },
      2:
      {
        id: 3,
        name: 'Nefi 3',
        age: 40
      }
    }

    const answer = Object.values(data).reduce((prev, value) => prev + value.age, 0)
    console.log("answer:", answer)

    //con el JSON anterior filtrar a las personas de edad igual o menor a 35 y devolver solo sus id
    const answer2 = Object.values(data).filter(p => p.age <= 35).map(p => p.id)
    console.log('answer 2;,', answer2)


  }

  //Rest operator captacion de parametros
  getRest(...params: any[])
    {
      console.log('operator Rest:', params);
    }

}
