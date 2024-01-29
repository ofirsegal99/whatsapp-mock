'use client'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import avatarPlaceholder from '@/styles/assets/avatar-placeholder.png'
import Dialog from '@/components/Dialog'
import Dropdown from '@/_components/Dropdown'
import logout from '@/utils/logout'
type Primary = {
  type:'primary';
  placeholder:'You can search or start a new chat';
}

type Filtered = {
  type:'filtered';
  placeholder:'Unread chat search';
}


type listState = Primary | Filtered;

interface SubContentProps{
  children:ReactNode;
}

const SubContent:FC<SubContentProps> = ({children}) => {

    const {data:session} = useSession()
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused,setIsFocused] = useState<boolean>(false)
    const [listState,setListState] = useState<listState>({type:'primary',placeholder:'You can search or start a new chat'})

  function focus(state:boolean){
    setIsFocused(state);
    changePlaceholder(listState,state);
  }

  function toggleInputType(listState:listState){
    switch (listState.type) {
      case 'primary':
        setListState({
          type:'filtered',
          placeholder:'Unread chat search'
        })
        break;
      case 'filtered':
        setListState({
          type:'primary',
          placeholder:'You can search or start a new chat'
        })
        break;
    }
  }

  useEffect(() => {
    changePlaceholder(listState,isFocused)
  },[listState])

  function changePlaceholder(listState:listState,state:boolean){
    if(inputRef.current){
      if(listState.type==='primary' && state){
        inputRef.current.placeholder = '';
      }
      else{
        inputRef.current.placeholder = listState.placeholder;
      }
    }
  }

  useEffect(() => {
    if(inputRef.current){
      if(isFocused){
             inputRef.current.focus()
       }
       else{
             inputRef.current.blur()
       }
    }
  },[isFocused])

  const signOutButton = <button onClick={() => {logout()}}>
    Sign Out
  </button>
  return (
    <div className='flex w-3/12 flex-col'>
    <div className='flex w-full justify-between items-center px-5 py-3 max-h-[4.75rem] h-[4.75rem] min-h-[4.75rem] box-border'>
      <div className='flex items-center gap-3'>
        <Image className='rounded-full w-11 h-11 object-cover object-center' width={1000} height={667} src={session?.user?.image || avatarPlaceholder} alt={'user-image'}/>
        <h4 className=' text-base font-semibold text-WDS-green-600'>
          {session?.user?.name}
        </h4>
      </div>
      <div className=' flex gap-2'>

        <Dialog title={'New chat'}>
           <Button>
                 <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="#54656f"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="#54656f"></path></svg>
           </Button>
        </Dialog>
        <Dropdown items={[
          signOutButton
        ]}        >
            <Button>
                  <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill='#54656f' d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
            </Button>
          </Dropdown>
      </div>
    </div>
     <div className='flex w-full pl-4 py-2 bg-[#fff] border-solid border-b-[0.8px] border-[#d1d7db]'>
         <div className='flex w-full items-center'>
            <div className='flex w-full rounded-lg bg-[#f0f2f5] px-2 gap-6 relative'>
            <button className=' absolute w-10 h-10 flex justify-center items-center z-10'
            >
                <svg className={`absolute ${isFocused ? 'opacity-100 animate-backRotation' : 'opacity-0 animate-frontRotation'} transition-opacity duration-400`} viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>back</title><path fill="#00a884" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                <svg className={`absolute ${isFocused ? 'opacity-0':'opacity-100'} transition-opacity duration-400`}  viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search</title><path fill="#54656f" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
            </button>
                <input onFocus={() => {focus(true)}} onBlur={() => {focus(false)}} ref={inputRef} placeholder='You can search or start a new chat' className='z-20 cursor-pointer flex w-full h-10 bg-transparent outline-none placeholder-WDS-warm-gray-400 text-WDS-neutral-gray-1000 font-medium pl-16' type="text" />
            </div>
            <button 
            onClick={
              () => {toggleInputType(listState)}
            }
            className={`mx-3 w-9 h-9 aspect-square flex justify-center items-center rounded-full ${listState.type === 'filtered' ? 'bg-[#00a884]' : ' bg-transparent'}`}>
                    <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>filter</title><path fill={`${listState.type === 'filtered' ? '#f7f8fa' : '#8696a0'}`} d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg>
            </button>
         </div>
     </div>
     {
      children
     }
  </div>
  )
}

export default SubContent