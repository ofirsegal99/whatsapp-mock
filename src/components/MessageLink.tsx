'use client'
import Link from 'next/link'
import React, { FC, useLayoutEffect, useState } from 'react'
import Avatar from '@/components/Avatar'
import { ConversationWithEverything, participant } from '../../types'
import { useSession } from 'next-auth/react'
import { getPartner, getUser } from '@/actions/user'
import { getFormattedLastSeen } from '@/utils/getFormattedLastMessageDate';
// const mockConversation = {
//     conversationId:'6514654165as4d65sa4d6a5sd4sa65d4ad6sa54das6',
//     conversationName:'Shauli',
//     conversationImage:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     conversationMessages:[
//         {
//             sender:{
//                 id:'13a2s1ds6a5d1as6d1as3d2a1s3d1sa3da1s5d6as1',
//                 name:'Shauli'
//             },
//             content:'Thanks you <3',
//             isRead:true,
//             date:'8:00 AM',
//         },
//         {
//             sender:{
//                 id:'13a2s1ds6a5d1as6d1as3d2a1s3d1sa3da1s5d6as1',
//                 name:'Shauli'
//             },
//             content:'alright bro',
//             isRead:false,
//             date:'8:35 AM',
//         },
//     ],
//     isWholeConversationRead:false,
//     numberOfUnreadMessages:15,
//     conversationSettings:{
//         isMute:true,
//     }
// }

const mockConversation = {
    participants:[
        '13a2s1ds6a5d1as6d1as3d2a1s3d1sa3da1s5d6as1',
        '1354a6sd54sa6d8sa4d9sa4d9sad8sa9d7sad9sa4d',
    ],
    id:'6514654165as4d65sa4d6a5sd4sa65d4ad6sa54das6',
    messages:[
        {
            sender:{
                id:'13a2s1ds6a5d1as6d1as3d2a1s3d1sa3da1s5d6as1',
                name:'Shauli'
            },
            content:'Thanks you <3',
            isRead:true,
            date:'8:00 AM',
        },
        {
            sender:{
                id:'13a2s1ds6a5d1as6d1as3d2a1s3d1sa3da1s5d6as1',
                name:'Shauli'
            },
            content:'alright broasdsadadsadsdsdasdsadasdsadsadasdsadsadsadsadasdasdasds',
            isRead:true,
            date:'8:35 AM',
        },
    ],
    isWholeConversationRead:true,
    numberOfUnreadMessages:0,
    conversationSettings:{
        isMute:false,
    }
}

interface MessageLinkProps{
    conversation:ConversationWithEverything;
}

const MessageLink:FC<MessageLinkProps> = ({conversation}) => {
    const {data:session} = useSession();
    const [partner,setPartner] = useState<participant|null>(null)
    const [lastSeen,setLastSeen] = useState<string>('')
    useLayoutEffect(() => {
        setLastSeen(getFormattedLastSeen(conversation.messages[conversation.messages.length-1].dateOfSent));
        const fetchData = async () => {
              try{
                    let user = await getUser(session?.user?.email);
                    if(!user) return setPartner(null);
                    let curr:participant|null = await getPartner(user.id,conversation.participants);
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
              }
        )
  },[])
  return (
    <Link className='group h-[5.5rem] gap-4 pr-6 pl-4 flex w-full bg-[#fff] hover:bg-[#f5f6f6] min-h-[5.5rem]' href={`/conversation/${conversation.id}`}>
    <div className='flex justify-center items-center'>
        <Avatar src={partner?.image} size={50} alt={`conversation user image`}/>
    </div>
    <div className='flex w-[calc(100%-4.5rem)] justify-center flex-col border-solid border-b-[0.8px] border-[#d1d7db] overflow-hidden'>
        <div className='flex w-full items-center justify-between'>
            <h4 className={`${mockConversation.isWholeConversationRead ? 'font-normal':'font-bold'} truncate`}>
                {partner?.name || 'nickname placeholder'}
            </h4>
            <span className={`${mockConversation.isWholeConversationRead ?' text-slate-950 font-normal' :'text-[#1fa855] font-semibold'} text-sm`}>
            {
              conversation.messages.length === 0 ? 
              ''
              :
                <span className={`${mockConversation.isWholeConversationRead ?' text-slate-950 font-normal' :'text-[#1fa855] font-semibold'} text-sm`}>
                {`${lastSeen}`}
                </span>
            }
            </span>
        </div>
        <div className='flex w-full items-center justify-between  h-8 relative'>
            <p className={`${mockConversation.isWholeConversationRead ? 'font-normal':'font-semibold'} text-sm  truncate`}>
            {
                conversation.messages.length === 0 ? 
                <span className=' text-WDS-neutral-gray-300'>No messages yet</span>
                :
                conversation.messages[conversation.messages.length-1].content
            }
            </p>
            <div className='flex items-center gap-2  pl-2 bg-[#fff] group-hover:bg-[#f5f6f6] absolute -right-7 group-hover:right-0 group-hover:animate-arrowSectionHover'>
            {
                mockConversation.conversationSettings.isMute ? 
                 <svg viewBox="0 0 16 18" height="18" width="16" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 18"><title>muted</title><path fill="#54656f" d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"></path></svg>
                 :
                 <>
                 </>
            }
            {
                mockConversation.numberOfUnreadMessages ? 
                <div className='p-2 rounded-full h-7 min-w-7 flex items-center justify-center bg-[#25d366]'>
                   <span className='text-[#fff] font-semibold text-[0.815rem]'>
                         {mockConversation.numberOfUnreadMessages} 
                    </span>
                </div>
                :
                <>
                </>
            }
            {
                <button className='h-7 w-7 '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='#54656f' d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </button>
            }
            </div>
        </div>
    </div>
</Link>
  )
}

export default MessageLink