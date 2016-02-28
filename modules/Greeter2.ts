import {Person02} from './components/Person02'

let
  greeter = (person: Person02) => {
    return `a${person.firstname} ${person.lastname}`
  },
  user = { firstname: "nd", lastname: "two" },
  greeter2 = greeter(user)

export default { greeter2 }