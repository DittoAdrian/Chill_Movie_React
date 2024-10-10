import {create} from 'zustand';

const useCount = create((set)=> ({
    name :'ahmad',
    count: 0,
    increment: ()=> set((state) => ({count: state.count + 1})),
    decrement : ()=> set((state) => {return state.count > 0 ? {count : state.count -1}: state}),
    chageName : (nilai)=> set(()=> {return nilai.length < 1 ? {name : 'ahmad'} : {name : nilai}})
}))

export default useCount;