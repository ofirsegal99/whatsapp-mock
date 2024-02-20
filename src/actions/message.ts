'use server'
import { db } from "@/lib/db";

// export const submitMessage = async (messageContent:string,conversationId:string|null,userId:string|null) => {
//     if(!conversationId || !userId) return null;    
//     await createMessage(messageContent,userId).then((result) => {
//         if(!result) return null;

//     })
//     return null;
// }

// export const createMessage = async (messageContent:string,userId:string) => {
//     const newMessage = await db.message.create({
//         data:{
//             senderId:userId,
//             content:messageContent,
//             conversation:{
//                 connect:{
//                     id:conversationId
//                 }
//             }
//         }
//     })
//     if(!newMessage) return null;
//     return newMessage;
// }

export async function addMessageToConversation(messageContent:string,conversationId:string|null,userId:string|null){
if(!conversationId || !userId) return null;    
try{
    const conversation = await db.conversation.findUnique({
        where:{
            id:conversationId
        },
        include: {
            messages: true, // Include existing messages in the conversation
          },
    })
    if (!conversation) {
        throw new Error('Conversation not found');
      }
    const newMessage = await db.message.create({
        data:{
            content:messageContent,
            senderId:userId,
            conversationId:conversationId,
        },
    });
    return newMessage;
} catch (error){
    throw error;
}
}
