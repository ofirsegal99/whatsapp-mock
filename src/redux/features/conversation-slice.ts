import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConversationWithEverything } from "../../../types";

interface conversationState{
    conversation:ConversationWithEverything | null;
}

const initialState = {
    conversation: null
} satisfies conversationState as conversationState;

const conversationSlice = createSlice({
    name:'conversation',
    initialState,
    reducers:{
        addMessage(state, action: PayloadAction<ConversationWithEverything | null>){
            console.log(state);
        },
    },
})

export const { addMessage } = conversationSlice.actions

export default conversationSlice.reducer
