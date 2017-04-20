export class User{
    id: number;
    name: string;
    email: string;
    phoneNumbers: { number: number, type: string }[];
}