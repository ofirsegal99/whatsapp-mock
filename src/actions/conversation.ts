'use server'
import { db } from "@/lib/db";
import { Conversation } from "@prisma/client";

export const createConversation = async () => {
    return null;
}

export const getConversations = async (currentUserId:string): Promise<Conversation[]> => {
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