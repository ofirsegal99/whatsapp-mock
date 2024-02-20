'use client'
import React, { FC, useLayoutEffect, useState } from 'react'
import Button from '@/components/Button';
import Row from '@/components/Row';
import Footer from '@/app/conversation/[chat]/Footer'
import Avatar from '@/components/Avatar';
import { useSession } from 'next-auth/react';
import { ConversationWithEverything, participant } from '../../../../types';
import { getPartner, getUser } from '@/actions/user';
import { getConversation } from '@/actions/conversation';
import Loading from '@/components/Loading';
type ConversationId = {
  chat:string;
}

interface ChatProps{
    params:ConversationId;
}

const Chat:FC<ChatProps> = ({params}) => {
  const chatId = params.chat;
  const {data:session} = useSession();
  const [conversation,setConversation] = useState<ConversationWithEverything | null>(null);
  const [partner,setPartner] = useState<participant|null>(null);
  const [userId,setUserId] = useState<string|null>(null)
  useLayoutEffect(() => {
      const fetchData = async () => {
            try{
                  let user = await getUser(session?.user?.email);
                  if(!user) return setPartner(null);
                  setUserId(user.id);
                  let conv = await getConversation(chatId);
                  if(!conv) return setConversation(null);
                  setConversation(conv);
                  let curr:participant|null = await getPartner(user.id,conv.participants);
                  if(!curr) return setPartner(null);
                  return setPartner(curr);
            }
            catch(error){
                  console.log('Error fetching data', error)
            }
      };
      fetchData();
      return(
            () => {
                  setPartner(null);
                  setConversation(null);
            }
      )
},[])
  return (
    <div className='flex flex-col w-full'>
      <header className='flex w-full justify-between items-center px-5 py-3 max-h-[4.75rem] h-[4.75rem] min-h-[4.75rem] box-border bg-[#f0f2f5]'>
          <div className='flex items-center justify-center gap-4'>
            <Avatar className='rounded-full w-11 h-11 object-cover object-center' src={partner?.image} size={50} alt={'parnter picture'}/>
              <div className='flex flex-col'>
                      <h4 className=' block text-base font-medium'>
                          {partner?.name || 'nickname placeholder'}
                      </h4>
                      <span className=' block text-sm text-gray-500'>
                        {/* Last seen today at 10:49 PM */}
                        {partner?.status || 'status placeholder'}
                      </span>
              </div>
          </div>
          <div className='flex gap-2'>
              <Button className=' opacity-40 flex gap-2 items-center justify-center'>
                   <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>video-call</title><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="#54656f"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="#54656f"></path></svg>
                   <svg viewBox="0 0 17 13" height="10" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 17 13"><title>chevron-down-alt</title><path fill="#54656f" d="M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z"></path></svg>
              </Button>
              <Button>
                     <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search-alt</title><path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>            </Button>
              <Button>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill='#54656f' d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
              </Button>
          </div>
      </header>
      <div className='flex w-full h-full flex-col justify-between items-center bg-[#fff] overflow-hidden'>
        <div className='flex w-full h-full items-center bg-[#e7e1d6] overflow-hidden'>
          <div className='flex flex-col justify-end w-full h-full items-center bg-chat-background bg-repeat'>
            <div className='flex justify-end gap-4 w-full h-full items-center bg-[#5f5748] bg-opacity-[0.2] px-16 py-8 overflow-y-scroll flex-wrap-reverse flex-row'>
              {!conversation ?
                <div className='flex w-full justify-center'>
                <Loading/>
              </div>
              :
              conversation.messages.map((message) => {
                return(
                <Row key={message.id} variant={'primary'}>
                    {message.content}
                </Row>
                )
              })
              }
            </div>
          </div>
        </div>
              <Footer userId={userId} conversation={conversation}/>
      </div>
    </div>
  )
}

export default Chat