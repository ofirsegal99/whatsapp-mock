'use client'
import { Dialog as Headless_UI_Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode, useState } from 'react'

interface DialogProps{
    children:ReactNode;
    title:string;
}

const Dialog:FC<DialogProps> = ({children,title}) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <span
          onClick={openModal}
        >
          {children}
        </span>
      <Transition appear show={isOpen} as={Fragment}>
        <Headless_UI_Dialog as="div"  className="absolute z-30  h-[calc(100%-2.375rem)] w-[calc(100%-2.375rem)] top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] flex" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Headless_UI_Dialog.Panel className="w-3/12 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                    <div className='flex items-center justify-start gap-3 bg-WDS-green-600 px-4 py-10'>
                       <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none"
                          onClick={closeModal}
                        >
                             <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>back</title><path fill="white" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                        </button>
                        <Headless_UI_Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-WDS-white-alpha-default"
                      >
                        {title}    
                       </Headless_UI_Dialog.Title>
                    </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                  <div className="mt-4">
                  </div>
                </Headless_UI_Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Headless_UI_Dialog>
      </Transition>
    </>
  )
}

export default Dialog;