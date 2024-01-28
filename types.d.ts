type Conversation = {
    id:string;
    messages : Messages[];
    picture:string;
    createdAt:string;
    participants: Users.id[];
}
type User = {
    id:string;
    nickname:string;
    password:string;
    email:string;
    phonenumber:string;
    status:string;
}

type RegisterScheme = {
    nickname:string;
    password:string;
    email:string;
    phonenumber:string;
}

// type LoginScheme = {
//     password:string;
//     email:string;
// }

type Message = {
    id:string;
    content:string;
    dateOfSent:string;
    messageState:string;
}