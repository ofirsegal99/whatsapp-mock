'use client'
import { submitLogin } from '@/utils/submitLogin'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

type EmailRules = {
    isEmailValid:boolean
}


const Form = () => {
    const [error,setError] = useState<string | undefined>(undefined);
    const [emailInputValue,setEmailInputValue] = useState<string>('');
    const [passwordInputValue,setPasswordInputValue] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const [emailRules,setEmailRules] = useState<EmailRules>({
        isEmailValid:false
    })

    function handleEmailChange(value:string){
        setEmailInputValue(value);
        setEmailRules({
            ...emailRules,
            isEmailValid:checkForEmailValidation(value)
        });
    }

   function areInputsValid(){
    return(
        passwordInputValue.length > 0 &&
        emailRules.isEmailValid
    )
   } 

   function checkForEmailValidation(value:string){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValidationTest = emailRegex.test(value);
    return emailValidationTest;
}
useEffect(() => {
    if(!!error){
        toast.error(error)
        setError(undefined)
    }
},[error])
  return (
    <form 
    onSubmit={
        (e) => {
            e.preventDefault(); 
            submitLogin({
                password:passwordInputValue,
                email:emailInputValue
            }).then((data) => {
                setError(data?.error);
            })
        }
    }
    className='pt-48 flex flex-col gap-4'>
            <div className={` ${emailInputValue.length === 0 || emailRules.isEmailValid ? 'bg-WDS-sky-blue-75':'bg-WDS-red-75'} flex  w-full px-5 rounded-md`}>
                <input value={emailInputValue} onChange={(e:ChangeEvent<HTMLInputElement>) => {handleEmailChange(e.target.value)}} className={`${emailRules.isEmailValid ? 'text-WDS-sky-blue-500':'text-WDS-red-500' } placeholder-WDS-warm-gray-500 outline-none bg-transparent text-base font-medium py-3 w-full`} placeholder='Enter Email' type="email" />
                {
                    emailInputValue.length > 0 ? 
                    <button onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {e.preventDefault();setEmailInputValue('')}} className=' flex justify-center items-center p-1'>
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3.5" y="3.5" width="17.5" height="17.5" rx="8.75" stroke="#667085"/>
                            <path d="M14.7946 10.0021L10.0026 14.7941" stroke="#667085" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.796 14.797L10 10" stroke="#667085" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>  
                     </button>
                    :
                    <>
                    </>
                }
            </div>
            {
                emailInputValue.length > 0 && 
                <div className=' flex gap-1 flex-col items-start justify-start'>
                    {
                        emailRules.isEmailValid ? 
                        <div className='flex items-center gap-2'>
                        <svg   className='fill-WDS-green-500' xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                        <span  className='text-sm text-WDS-green-500 font-semibold'>
                            Email should be in the currect format.
                        </span>
                        </div>
                        :
                        <div className='flex items-center gap-2'>
                            <svg className='fill-WDS-red-500' xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        <span className=' text-sm text-WDS-red-500 font-semibold'>
                            Email should be in the currect format.
                        </span>
                        </div>
                    }
                </div>
            }
        <div className='flex bg-WDS-sky-blue-75 w-full px-5 rounded-md'>
            <input
             value={passwordInputValue}
              onChange={(e:ChangeEvent<HTMLInputElement>) => {setPasswordInputValue(e.target.value)}}
              className='placeholder-WDS-warm-gray-500 outline-none bg-transparent placeholder:text-base font-medium py-3 w-full'
              placeholder='Enter Password'  
              type={ isPasswordVisible ? 'text' : "password"} />
            {
                passwordInputValue.length > 0 ? 
                <button onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {e.preventDefault();setIsPasswordVisible(!isPasswordVisible)}} className='flex justify-center items-center p-1'>
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M12.5114 14.0663C10.9846 14.0663 9.74624 12.8286 9.74624 11.3011C9.74624 10.5272 10.0631 9.82955 10.5754 9.32693C10.7656 9.14031 10.7686 8.83483 10.5819 8.6446C10.3953 8.45438 10.0898 8.45145 9.89962 8.63807C9.21011 9.31449 8.78125 10.2573 8.78125 11.3011C8.78125 13.3617 10.4519 15.0312 12.5114 15.0312C13.5542 15.0312 14.498 14.6024 15.1744 13.9129C15.361 13.7227 15.3581 13.4172 15.1679 13.2306C14.9777 13.0439 14.6722 13.0469 14.4856 13.2371C13.983 13.7494 13.2845 14.0663 12.5114 14.0663Z" fill="#677185"/>
                     <path fillRule="evenodd" clipRule="evenodd" d="M4.86113 15.2958C6.41187 17.2002 8.87407 19.1562 12.4278 19.1562C14.838 19.1562 16.7565 18.2541 18.2279 17.0769C18.4338 16.9122 18.4662 16.6131 18.3003 16.4087C18.1344 16.2044 17.833 16.1723 17.6272 16.3369C16.2908 17.406 14.5783 18.2059 12.4278 18.2059C9.27031 18.2059 7.05482 16.478 5.60568 14.6984C4.88217 13.8099 4.35932 12.9191 4.01741 12.2496C3.84675 11.9154 3.72195 11.6379 3.64038 11.4455C3.62008 11.3976 3.60248 11.355 3.58752 11.3182C3.62404 11.2328 3.67542 11.1166 3.74195 10.9749C3.89472 10.6497 4.12678 10.1915 4.44151 9.66599C5.07304 8.61151 6.02699 7.30344 7.32593 6.24933C7.53061 6.08323 7.56089 5.78387 7.39356 5.58069C7.22623 5.37751 6.92466 5.34745 6.71998 5.51355C5.30516 6.66169 4.28386 8.06949 3.61858 9.18033C3.2849 9.73747 3.03816 10.2243 2.87423 10.5734C2.79221 10.748 2.73078 10.8885 2.68943 10.9864C2.66875 11.0353 2.65309 11.0737 2.64237 11.1003C2.63701 11.1137 2.63289 11.1241 2.62999 11.1315L2.62657 11.1402L2.62555 11.1429L2.62521 11.1438L2.62509 11.1441C2.62504 11.1442 2.62499 11.1443 3.07244 11.3132C2.62151 11.4726 2.62158 11.4729 2.62167 11.4731L2.62188 11.4737L2.6225 11.4754L2.62448 11.4808C2.62613 11.4853 2.62843 11.4916 2.63141 11.4995C2.63735 11.5154 2.64595 11.5381 2.65725 11.5672C2.67986 11.6253 2.71331 11.7088 2.75795 11.8141C2.84719 12.0246 2.9814 12.3227 3.16349 12.6793C3.52708 13.3912 4.08471 14.3424 4.86113 15.2958ZM3.07244 11.3132L2.62151 11.4726C2.58333 11.3663 2.58457 11.2499 2.62499 11.1443L3.07244 11.3132Z" fill="#677185"/>
                     <path fillRule="evenodd" clipRule="evenodd" d="M18.8437 15.599C19.0391 15.772 19.3392 15.7556 19.5141 15.5624C20.4324 14.5478 21.0912 13.4913 21.5202 12.6906C21.7352 12.2895 21.8935 11.9506 21.9987 11.7104C22.0513 11.5902 22.0907 11.4946 22.1172 11.428C22.1305 11.3948 22.1406 11.3687 22.1476 11.3506C22.1511 11.3415 22.1538 11.3343 22.1557 11.3292L22.158 11.3231L22.1587 11.3211L22.1589 11.3205L22.159 11.3202C22.1591 11.3201 22.1591 11.32 21.7128 11.16C22.1566 10.9932 22.1565 10.993 22.1564 10.9928L22.1555 10.9906L22.1535 10.9853C22.1517 10.9808 22.1493 10.9747 22.1462 10.9668C22.1399 10.9511 22.1308 10.9286 22.1189 10.8997C22.0951 10.8421 22.0599 10.7591 22.0131 10.6544C21.9195 10.4451 21.7795 10.1485 21.5911 9.79371C21.2149 9.08521 20.6431 8.13866 19.8603 7.18977C18.2995 5.29764 15.853 3.34375 12.4131 3.34375C10.8616 3.34375 9.50706 3.74313 8.34492 4.35717C8.11365 4.47936 8.02631 4.76388 8.14983 4.99266C8.27336 5.22143 8.56097 5.30784 8.79224 5.18564C9.83116 4.63672 11.0332 4.283 12.4131 4.283C15.4521 4.283 17.6554 6.00241 19.1247 7.78359C19.857 8.67135 20.3953 9.56145 20.7505 10.2304C20.9278 10.5644 21.0587 10.8418 21.1447 11.0342C21.1665 11.0829 21.1854 11.1262 21.2014 11.1635C21.1814 11.2118 21.1568 11.27 21.1274 11.337C21.0308 11.5578 20.8831 11.8742 20.6813 12.2507C20.277 13.0054 19.6596 13.9934 18.8067 14.9359C18.6318 15.1291 18.6484 15.426 18.8437 15.599ZM21.7128 11.16L22.1566 10.9932C22.1969 11.0983 22.1978 11.2143 22.1591 11.32L21.7128 11.16Z" fill="#677185"/>
                     <path fillRule="evenodd" clipRule="evenodd" d="M15.4279 12.2744C15.6747 12.3191 15.9085 12.1399 15.95 11.8741C15.9819 11.6703 16 11.4594 16 11.242C16 9.15868 14.4318 7.46875 12.4963 7.46875C12.2944 7.46875 12.0986 7.48825 11.9093 7.52255C11.6625 7.56729 11.4961 7.81905 11.5376 8.08487C11.5792 8.35069 11.8129 8.5299 12.0598 8.48516C12.2034 8.45913 12.3488 8.4449 12.4963 8.4449C13.931 8.4449 15.0936 9.69762 15.0936 11.242C15.0936 11.4008 15.0804 11.5574 15.0562 11.7121C15.0146 11.9779 15.1811 12.2297 15.4279 12.2744Z" fill="#677185"/>
                     <path fillRule="evenodd" clipRule="evenodd" d="M8.78125 11.3011C8.78125 13.3616 10.4509 15.0312 12.5114 15.0312C13.5552 15.0312 14.498 14.6024 15.1744 13.9129C15.361 13.7227 15.3581 13.4172 15.1679 13.2306C14.9777 13.0439 14.6722 13.0469 14.4856 13.2371C13.983 13.7494 13.2853 14.0663 12.5114 14.0663C10.9839 14.0663 9.74624 12.8286 9.74624 11.3011C9.74624 10.528 10.0631 9.8295 10.5754 9.32693C10.7656 9.14031 10.7686 8.83483 10.5819 8.6446C10.3953 8.45438 10.0898 8.45145 9.89962 8.63807C9.21006 9.31454 8.78125 10.2583 8.78125 11.3011Z" fill="#677185"/>
                     <path fillRule="evenodd" clipRule="evenodd" d="M20.6749 19.3624C20.8584 19.1789 20.8584 18.8814 20.6749 18.6978L5.11465 3.13763C4.93115 2.95412 4.63363 2.95412 4.45013 3.13763C4.26662 3.32113 4.26662 3.61865 4.45013 3.80215L20.0103 19.3624C20.1939 19.5459 20.4914 19.5459 20.6749 19.3624Z" fill="#677185"/>
                     </svg>
                 </button>
                :
                <>
                </>
            }
        </div>
        <div className='flex justify-end w-full'>
            <button className='py-2 text-xs font-bold text-WDS-neutral-gray-300'>
                Recover password ?
            </button>
        </div>
        <div className='flex w-full flex-col gap-12'>
            <input 
            className='cursor-pointer flex w-full p-5 text-WDS-white-alpha-default tracking-widest bg-WDS-sky-blue-400 font-bold rounded-md justify-center items-center shadow-md shadow-WDS-sky-blue-20 disabled:opacity-20 transition-all disabled:pointer-events-none'
            value='Sign In' 
            type="submit"
            disabled={!areInputsValid()} />
            <div className='flex w-full justify-center items-center relative'>
                <div className='w-full bg-WDS-neutral-gray-300 h-[0.05rem]'/>  
                <span className='absolute p-3 bg-[#F6F6F6] tracking-wider font-medium text-xs text-WDS-neutral-gray-300'>
                 Or continue with    
                </span>                  
            </div>
            <div className='flex items-center gap-8'>
                <button className='transition-all hover:scale-110 hover:shadow-md hover:shadow-WDS-warm-gray-400 hover:bg-WDS-white-alpha-default hover:border-WDS-white-alpha-default  w-32 flex border-[1px] border-solid border-WDS-neutral-gray-200 justify-center items-center py-4 px-10 rounded-xl'>
                      <svg className=' h-7' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M27.44 14.3182C27.44 13.3254 27.3509 12.3709 27.1855 11.4545H14V16.87H21.5345C21.21 18.62 20.2236 20.1027 18.7409 21.0954V24.6082H23.2655C25.9127 22.1709 27.44 18.5818 27.44 14.3182Z" fill="#4285F4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0001 28C17.7801 28 20.9491 26.7463 23.2655 24.6082L18.741 21.0954C17.4873 21.9354 15.8837 22.4318 14.0001 22.4318C10.3537 22.4318 7.26732 19.9691 6.16641 16.66H1.48914V20.2872C3.79277 24.8627 8.52732 28 14.0001 28Z" fill="#34A853"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.16637 16.66C5.88637 15.82 5.72727 14.9227 5.72727 14C5.72727 13.0773 5.88637 12.18 6.16637 11.34V7.71271H1.48909C0.540909 9.60271 0 11.7409 0 14C0 16.2591 0.540909 18.3973 1.48909 20.2873L6.16637 16.66Z" fill="#FBBC05"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.0001 5.56818C16.0555 5.56818 17.901 6.27455 19.3519 7.66182L23.3673 3.64637C20.9428 1.38727 17.7737 0 14.0001 0C8.52732 0 3.79277 3.13727 1.48914 7.71273L6.16641 11.34C7.26732 8.03091 10.3537 5.56818 14.0001 5.56818Z" fill="#EA4335"/>
                        </svg>
                </button>
                <button className='transition-all hover:scale-110 hover:shadow-md hover:shadow-WDS-warm-gray-400 hover:bg-WDS-white-alpha-default hover:border-WDS-white-alpha-default  w-32 flex border-[1px] border-solid border-WDS-neutral-gray-200 justify-center items-center py-4 px-10 rounded-xl'>
                     <svg className=' h-7' width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.8414 6.46154C13.1172 6.46154 14.7164 5.60712 15.6687 4.4679C16.5312 3.43547 17.1602 1.99364 17.1602 0.551812C17.1602 0.356008 17.1422 0.160203 17.1062 0C15.6867 0.0534012 13.9797 0.943421 12.9555 2.13605C12.1469 3.04387 11.4102 4.4679 11.4102 5.92753C11.4102 6.14113 11.4461 6.35474 11.4641 6.42594C11.5539 6.44374 11.6977 6.46154 11.8414 6.46154ZM7.34922 28C9.09219 28 9.86484 26.843 12.0391 26.843C14.2492 26.843 14.7344 27.9644 16.675 27.9644C18.5797 27.9644 19.8555 26.22 21.0594 24.5111C22.407 22.5531 22.9641 20.6306 23 20.5416C22.8742 20.506 19.2266 19.0286 19.2266 14.8811C19.2266 11.2854 22.1016 9.66561 22.2633 9.541C20.3586 6.83535 17.4656 6.76414 16.675 6.76414C14.5367 6.76414 12.7937 8.04577 11.6977 8.04577C10.5117 8.04577 8.94844 6.83535 7.09766 6.83535C3.57578 6.83535 0 9.71901 0 15.1659C0 18.548 1.32969 22.1259 2.96484 24.4399C4.36641 26.398 5.58828 28 7.34922 28Z" fill="#000100"/>
                     </svg>
                </button>
                <button className='transition-all hover:scale-110 hover:shadow-md hover:shadow-WDS-warm-gray-400 hover:bg-WDS-white-alpha-default hover:border-WDS-white-alpha-default w-32 flex border-[1px] border-solid border-WDS-neutral-gray-200 justify-center items-center py-4 px-10 rounded-xl'>
                    <svg className=' h-7' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.0061 14.0856C28.0061 6.30631 21.7367 0 14.003 0C6.26936 0 0 6.30631 0 14.0856C0 21.1161 5.1207 26.9433 11.8151 28V18.1572H8.2596V14.0856H11.8151V10.9823C11.8151 7.45214 13.9056 5.50217 17.1042 5.50217C18.6363 5.50217 20.2388 5.77728 20.2388 5.77728V9.24365H18.473C16.7335 9.24365 16.191 10.3294 16.191 11.4433V14.0856H20.0747L19.4538 18.1572H16.191V28C22.8853 26.9433 28.0061 21.1161 28.0061 14.0856Z" fill="#1778F2"/>
                    </svg>
                </button>
            </div>
        </div>
    </form>
  )
}

export default Form