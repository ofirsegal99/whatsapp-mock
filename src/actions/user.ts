'use server'
import { db } from "@/lib/db";

/* 
this function finds all users who do not have ocnversation with the given user id.
*/
export const  getUsersWithoutConversation = async (userEmail:string|null|undefined) => {
    if(!userEmail){
        return null;
    }
  // Find the user with the specified email
    const currentUser = await db.user.findUnique({
      where: { email: userEmail },
      include: { conversations: true },
    });

  if (!currentUser) {
    throw new Error('User not found');
  }

  // Get all users excluding the current user and users with whom the current user has a conversation
  const usersWithoutConversation = await db.user.findMany({
    where: {
      NOT: {
        id: currentUser.id,
        conversations: {
          some: { id: { in: currentUser.conversations.map((conv) => conv.id) } },
        },
      },
    },
    select: {
        id: true,
        name: true,
        email: true,
        phonenumber: true,
        image:true,
      },
  });
 return usersWithoutConversation;
}


export const getUser = async (userEmail:string|null|undefined) => {
  if(!userEmail){
    return null;
}
  // Find the user with the specified email
  const user = await db.user.findUnique({
    where: { email: userEmail },
    select: {
      id: true,
      name: true,
      email: true,
      phonenumber: true,
      image:true,
    },
  });

if (!user) {
  throw new Error('User not found');
}
  return user;
}