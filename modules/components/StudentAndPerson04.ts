export class Student04 {
  fullname: string;
  constructor(public firstname: string, public middleinitial: string, public lastname: string) {

    this.fullname = `${firstname} ${middleinitial} ${lastname}`
  }
}

export interface Person04 {
  firstname: string
  lastname: string
}