import React from 'react'
import Person from './Person';

function NameList() {
    // const names = ['John', 'Malcolm', 'Richard', 'Toto', 'Bryan'];
//   return (
//     <div>
//          Affichage one by one
//         {/* <h2>{names[0]}</h2>
//         <h2>{names[1]}</h2>
//         <h2>{names[2]}</h2> */}
//          affichage avec une boucle (.map)
//         {
//             names.map(name => <h2>{name}</h2>)
//         }
//     </div>
//   )

    // const listDeNom = names.map(name => <h2>{name}</h2>)
    // return (<div>{listDeNom}</div>);

    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
      const personList = persons.map(person => <Person key={person.id} person={person} />)
      return (<div>{personList}</div>);


}

export default NameList