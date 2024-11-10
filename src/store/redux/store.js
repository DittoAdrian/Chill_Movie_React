import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/slice'

// STORE 
const store = configureStore({
    reducer : {
        login :userSlice
    }
});
console.log('Store Created : ',store.getState())

// SUBSCRIBE
store.subscribe(()=>{
    console.log("Store Change : ", store.getState())
})

export default store;