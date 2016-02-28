let
  greeter = (person: string) => {
    return `and ${person}`
  },
  user = "one",
  greeter1 = greeter(user)

export default { greeter1 }