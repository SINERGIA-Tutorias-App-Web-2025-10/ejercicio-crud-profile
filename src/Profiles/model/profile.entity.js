
export class Profile {

  constructor(
      {
        id = '',
        firstName =' ',
        lastName =' ',
        email = ' ',
        username = ' ',
        role = ' '
  }
  ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.role = role;
  }

}