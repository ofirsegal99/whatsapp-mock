type Conversation = {
    id:string;
    messages : Messages[];
    picture:string;
    createdAt:string;
    participants: Users.id[];
}
type Users = {
    id:string;
    nickname:string;
    password:string;
    email:string;
    phonenumber:string;
    status:string;
}
type Messages = {
    id:string;
    content:string;
    dateOfSent:string;
    messageSate:string;
}