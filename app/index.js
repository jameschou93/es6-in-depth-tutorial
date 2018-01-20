
import {league, persona, Superhero, Marvel} from './hero.js'

const root = "https://jsonplaceholder.typicode.com/users"

fetch(root, { method: "GET" } )
  .then(response => response.json())
  .then(json => console.log(json))
// let superman = new Superhero('Superman', 'Clark Kent')
// superman.hello()
//
// let spiderman = new Marvel('Spiderman', 'Peter Parker', 'good' )
// spiderman.hello()
//
// function Scanner() {
//
// }
// Adding methods and attributes using prototype
//
// Superhero.prototype.abilities
//
// spiderman.abilities = ["Spidey-sense"]
// console.log(spiderman.scan)
//
// let a = ["bunch", "of", "stuff", 234, 123, 2,1,1]
// let set = new Set(a)
//
// console.log(set)
// create function factory
// const wallet = () => {
//   // set variable
//   let balance = 0
//   // using arrow function to change variable value
//   let adjust = (value) => balance += value
//   const deposit10 = () => adjust(10)
//   const statement = () => balance
//
//   // all functions outside of return variable are private and cannot be viewed in console.log
//   return {deposit10, statement}
// }
// // instantiate function factory
// let james = wallet()
// // balance cannot be viewed unless using statement
// console.log(james.statement())
// james.deposit10()
// console.log(james.statement())
