
export class UserModel {
    idUser!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNum!: string;
    role!: Role;
}





export class Role {
    idRole!: number;
    code!: string;
    name!: string;

}