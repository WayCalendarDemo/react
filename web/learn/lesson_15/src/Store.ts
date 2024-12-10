import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserStateValue {
    userName: string
}
interface UserState {
    value: UserStateValue
}
const initialState = {value: {userName: ""}} as UserState;
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: UserState, action: PayloadAction<UserStateValue>) => {
            state.value = action.payload;
        },
        logout: (state: UserState) => {
            state.value = initialState.value
        }
    } 
});

export const {login,logout} = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});