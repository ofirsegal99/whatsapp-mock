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
        include:{
            messages:true,
            participants:true,
        }
    })
    if(!conversations)return [];
    return conversations;
}

export const getConversation = async (currentUserId:string) => {
    const conversations = await db.conversation.findUnique({
        where:{
            id:currentUserId
        },
        include:{
            messages:true,
            participants:true,
        }
    })
    if(!conversations)return null;
    return conversations;
}