import {create} from 'zustand'

const useData = create((set)=>({
    usersData : [
        {
            username:'falah666',
            password: 'falah123',
            email: 'falah@gmail.com'
        },
        {
            username:'gilang777',
            password:'gilang123',
            email: 'gilang@gmail.com'
        }
    ],
    updateUsersData : (data) =>set((state) => ({ usersData: [...state.usersData,data ] })),

    userLogin : 'test',
    updateUserLogin : (newuser) => set({ userLogin: newuser }),

    moviesData : [
        {
            id : 1 ,
            name : 'Dilan',
            rating : 8.7,
            tahun: '2018',
            type : 'movie', 
            image : '/images/image28.png',
            update : false,
            genre : [
                    'romantis',
                    'aksi',
                    'drama'
                    ],
            deskripsi : 'Milea bertemu dengan Dilan di sebuah SMA di Bandung pada tahun 1990. Perkenalan yang tidak biasa membawa Milea mengetahui keunikan Dilan yang cerdas, baik hati, dan romantis di matanya.'           
        }
        
    ]
}))

export default useData;