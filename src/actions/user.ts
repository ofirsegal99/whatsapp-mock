'use server'
import { db } from "@/lib/db";
import { ConversationWithEverything } from "../../types";

/* 
this function finds all users who do not have ocnversation with the given user id.
*/
export const  getUsersWithoutConversation = async (userEmail:string|null|undefined) => {
  const currentUser = await getUser(userEmail);
  if(!currentUser) return null;
// Get all users excluding the current user and users with whom the current user has a conversation
const usersWithoutConversation = await db.user.findMany({
  where: {
    AND:[
      {
        NOT:{
          conversations:{
            some:{
              participants:{
                some:{
                    id:currentUser.id
                }
              }
            }
          },
        },
      },
      {
        NOT:{
          id:currentUser.id
        }
      }
    ]
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
