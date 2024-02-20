import { Conversation, Prisma } from '@prisma/client'

type User = {
    id:string;
    nickname:string;
    password:string;
    email:string;
    phonenumber:string;
    status:string;
}

type ConversationWithEverything = Prisma.ConversationGetPayload<{
    include:{
        messages:true,
        participants:true
    }
}>

type participant = {
    id: string;
    name: string;
    email: string;
    emailVerified: Date | null;
    phonenumber: string;
    status: string | null;
    password: string | null;
    image: string | null;
};

type RegisterScheme = {
    nickname:string;
    password:string;
    email:string;
    phonenumber:string;
}

type Contact = {
    name:string;
    image:string | null;
    id:string;
    email:string
    phonenumber:string;
    type:'Contact';
}
type ContactWithLetter = {
    letter:string;
    type:'Letter';
} | Contact;


type Message = {
    id:string;
    content:string;
    dateOfSent:string;
    messageState:string;
}