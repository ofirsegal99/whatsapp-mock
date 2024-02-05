'use server'
import { db } from "@/lib/db";

export const createConversation = async () => {
    return null;
}

export const getConversations = async (currentUserId:string) => {
    const conversations = await db.conversation.findMany({
        where:{
            participants:{
                some:{
                    id:currentUserId,
                }
            }
        },
        select:{
            id:true,
            createdAt:true,
            picture:true,
            messages:true,
            participants:true,
        }
    })
    if(!conversations)return null;
    return conversations;
}