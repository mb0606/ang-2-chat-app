export class User {
    constructor(public firstName?: string, public email: string,
                public lastName?: string,
                public password: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }
}