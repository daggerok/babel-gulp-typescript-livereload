import {Student04, Person04} from './components/StudentAndPerson04'

let
  greeter = (person: Person04) => {
    return `an${person.firstname} ${person.lastname}`
  },
  user = new Student04("d", "fuck", "four"),
  greeter4 = greeter(user)

export default greeter4