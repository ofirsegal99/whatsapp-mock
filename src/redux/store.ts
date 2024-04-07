import { configureStore } from '@reduxjs/toolkit';
// import authReducer from "@/redux/features/auth-slice";
import conversationReducer from '@/redux/features/conversation-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer:{
        // authReducer,
        conversationReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector