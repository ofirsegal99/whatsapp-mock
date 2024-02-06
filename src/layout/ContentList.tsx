'use client'
import { getConversations } from '@/actions/conversation'
import { getUser } from '@/actions/user'
import MessageLink from '@/components/MessageLink'
import { Conversation } from '@prisma/client'
import { useSession } from 'next-auth/react'
import React, { FC, ReactNode, useLayoutEffect, useState } from 'react'


interface ContentListProps{
      children:ReactNode;
}

const ContentList:FC<ContentListProps> = ({children}) => {
      const {data:session} = useSession();
      const [conversations,setConversations] = useState<Conversation[] | null>(null);
      useLayoutEffect(() => {
            const fetchData = async () => {
                  try{
                        let user = await getUser(session?.user?.email);
                        if(!user) return setConversations(null);
                        let conv:Conversation[] = await getConversations(user.id);
                        if(!conv) return setConversations([]);
                        console.log(conv)
                        return setConversations(conv);
                  }
                  catch(error){
                        console.log('Error fetching data', error)
                  }
            };
            fetchData();
            return(
                  () => {
                        setConversations(null);
                  }
            )
      },[])
      return (
    <div className='bg-[#fff] flex flex-col h-full overflow-y-scroll flex-nowrap'>

      {
            conversations === null ? 
            <div className='flex flex-col gap-3 w-full justify-center items-center h-full'>
                  {
                        children
                  }
            </div>
            :
            conversations.length === 0 ?
            <div className='flex flex-col gap-3 w-full justify-center items-center h-full'>
                  <p className='w-full text-WDS-cool-gray-600 flex items-center justify-center'>
                        Did not find a single conversation...
                  </p>
                  <p className='w-full text-WDS-cool-gray-600 flex items-center gap-2 justify-center'>
                        {`Get started by clicking on the`} 
                        <span>
                               <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="#54656f"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="#54656f"></path></svg> 
                        </span>
                        {` button`}
                  </p>

            </div>
            :
            <React.Fragment>
                  {conversations.map((conversation) => {
                        return(
                               <MessageLink key={conversation.id}/>
                        )
                  })}
            </React.Fragment>
      }
        <div className='flex w-full items-center justify-center p-6 gap-1'>
              <span>
                  <svg viewBox="0 0 13 12" height="12" width="13" preserveAspectRatio="xMidYMid meet"><title>lock-small-v2</title><path d="M9.54004 3.4668C9.54004 2.87891 9.39421 2.33887 9.10254 1.84668C8.81543 1.34993 8.4235 0.958008 7.92676 0.670898C7.43457 0.379232 6.89681 0.233398 6.31348 0.233398C5.72559 0.233398 5.18327 0.379232 4.68652 0.670898C4.19434 0.958008 3.80241 1.34993 3.51074 1.84668C3.22363 2.33887 3.08008 2.87891 3.08008 3.4668V4.7041C3.05273 4.71322 2.99805 4.73828 2.91602 4.7793C2.61979 4.9388 2.39421 5.16439 2.23926 5.45605C2.15267 5.61556 2.09115 5.79102 2.05469 5.98242C2.01823 6.17383 2 6.45866 2 6.83691V9.25C2 9.62826 2.01823 9.91309 2.05469 10.1045C2.09115 10.2959 2.15267 10.4714 2.23926 10.6309C2.39421 10.9225 2.61979 11.1481 2.91602 11.3076C3.07096 11.3942 3.24414 11.4557 3.43555 11.4922C3.63151 11.5286 3.91634 11.5469 4.29004 11.5469H8.33008C8.70378 11.5469 8.98633 11.5286 9.17773 11.4922C9.3737 11.4557 9.54915 11.3942 9.7041 11.3076C9.99577 11.1527 10.2214 10.9271 10.3809 10.6309C10.4674 10.4714 10.529 10.2959 10.5654 10.1045C10.6019 9.91309 10.6201 9.62826 10.6201 9.25V6.83691C10.6201 6.45866 10.6019 6.17383 10.5654 5.98242C10.529 5.79102 10.4674 5.61556 10.3809 5.45605C10.2214 5.15983 9.99577 4.93424 9.7041 4.7793C9.62207 4.73828 9.56738 4.71322 9.54004 4.7041V3.4668ZM4.37207 3.4668C4.37207 3.11589 4.45866 2.79232 4.63184 2.49609C4.80501 2.19531 5.03971 1.95833 5.33594 1.78516C5.63672 1.61198 5.96257 1.52539 6.31348 1.52539C6.66439 1.52539 6.98796 1.61198 7.28418 1.78516C7.5804 1.95833 7.8151 2.19531 7.98828 2.49609C8.16146 2.79232 8.24805 3.11589 8.24805 3.4668V4.54004H4.37207V3.4668Z"></path></svg>
              </span>
              <span className=' text-[0.815rem] font-medium'>
                    Your personal messages are encrypted
              </span>
              <button className='text-[0.815rem] text-WDS-sky-blue-500 font-medium'>
                    end-to-end
              </button> 
        </div>
    </div>
  )
}

export default ContentList