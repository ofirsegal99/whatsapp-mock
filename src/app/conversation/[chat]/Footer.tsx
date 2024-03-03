'use client'
import React, { ChangeEvent, FC, useState } from 'react'
import Button from '@/components/Button';
import { ConversationWithEverything } from '../../../../types';
import { addMessageToConversation } from '@/actions/message';

interface FooterProps{
    conversation:ConversationWithEverything | null;
    userId:string | null;
}

const Footer:FC<FooterProps> = ({conversation,userId}) => {
    const [value,setValue] = useState<string>('');
    function handleSubmit(){
       const newMessage = addMessageToConversation(value,conversation?.id || null,userId);
        if (newMessage !== null) {
            setValue('');
        }
    }
  return (
    <footer className='flex w-full gap-1 items-center px-5 py-3 max-h-[4.75rem] h-[4.75rem] min-h-[4.75rem] box-border bg-[#f0f2f5]'> 
            <Button>
                 <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>smiley</title><path fill="#54656f" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg>
            </Button>
             <Button>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>attach-menu-plus</title><path fillRule="evenodd" clipRule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="#54656f"></path></svg>
            </Button>
                    <input value={value} onChange={(e:ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}} className='flex w-[98%] mx-[1%] outline-none text-base px-5 py-3 bg-[#fff] rounded-lg' placeholder='Type a message' type="text" />
            {
                value === ''
                ?
                <Button>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>ptt</title><path fill="#54656f" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                </Button>
                :
                <Button onClick={handleSubmit}>
                   <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>send</title><path fill="#54656f" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>
               </Button>            
            }
    </footer>
    )
}

export default Footer