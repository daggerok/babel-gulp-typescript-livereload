let
greeter = (person: string) => {
  return `and ${person}`
},
user = ['t', 'h', 'r', 'e'],
greeter3 = greeter(user.toString())

export { greeter3 }