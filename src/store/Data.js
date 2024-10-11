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
            rating : 4.2,
            tahun: '2018',
            type : 'movie', 
            image : '/images/image28.png',
            update : false,
            watched: false,
            genre : [
                    'romantis',
                    'aksi',
                    'drama'
                    ],
            deskripsi : 'Milea bertemu dengan Dilan di sebuah SMA di Bandung pada tahun 1990. Perkenalan yang tidak biasa membawa Milea mengetahui keunikan Dilan yang cerdas, baik hati, dan romantis di matanya.'           
        },
        {
            id :  2,
            name : 'Dont Look UP!',
            rating : 4.7,
            tahun: '2021',
            type : 'movie', 
            image : '/images/lanjutTonton0.png',
            update : false,
            watched: true,
            genre : [
                    'komedi',
                    'fiksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  3,
            name : 'Big Hero SIX',
            rating : 3.9,
            tahun: '2014',
            type : 'movie', 
            image : '/images/lanjutTonton1.png',
            update : false,
            watched: true,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  4,
            name : 'Suzume',
            rating : 4.2,
            tahun: '2022',
            type : 'movie', 
            image : '/images/lanjutTonton2.png',
            update : false,
            watched: true,
            genre : [
                    'petualangan',
                    'drama'
                    ],
            deskripsi : ''           
        },
        {
            id :  5,
            name : 'Spider-Man: Across the Spider-Verse',
            rating : 4.8,
            tahun: '2023',
            type : 'movie', 
            image : '/images/lanjutTonton3.png',
            update : false,
            watched: true,
            genre : [
                    'aksi',
                    'komedi'
                    ],
            deskripsi : ''           
        },
        {
            id :  6,
            name : 'The Devil all the time',
            rating : 4.1,
            tahun: '2020',
            type : 'movie', 
            image : '/images/lanjutTonton4.png',
            update : false,
            watched: true,
            genre : [
                    'horor',
                    'kriminal'
                    ],
            deskripsi : ''           
        },
        {
            id :  7,
            name : 'ALICE in Borderland',
            rating : 4.8,
            tahun: '2020',
            type : 'series', 
            image : '/images/lanjutTonton5.png',
            update : false,
            watched: true,
            genre : [
                    'aksi',
                    'horor',
                    'triler'
                    ],
            deskripsi : ''           
        },
        {
            id :  8,
            name : 'Guardians of the Galaxy Vol. 3',
            rating : 4.8,
            tahun: '2023',
            type : 'movie', 
            image : '/images/lanjutTonton6.png',
            update : false,
            watched: true,
            genre : [
                    'aksi',
                    'petualangan'
                    ],
            deskripsi : ''           
        },
        {
            id :  9,
            name : 'M3GAN',
            rating : 3.3,
            tahun: '2022',
            type : 'movie', 
            image : '/images/lanjutTonton7.png',
            update : false,
            watched: true,
            genre : [
                    'horor',
                    'sci-fi'
                    ],
            deskripsi : ''           
        },
        {
            id :  10,
            name : 'Doctor Strange in the Multiverse of Madness',
            rating : 3.9,
            tahun: '2022',
            type : 'movie', 
            image : '/images/lanjutTonton8.png',
            update : false,
            watched: true,
            genre : [
                    'fantasi',
                    'horor'
                    ],
            deskripsi : ''           
        },
        {
            id :  11,
            name : 'RIO',
            rating : 4.1,
            tahun: '2011',
            type : 'movie', 
            image : '/images/lanjutTonton9.png',
            update : false,
            watched: true,
            genre : [
                    'anak',
                    'komedi'
                    ],
            deskripsi : ''           
        },
        {
            id :  12,
            name : 'Blue Lock',
            rating : 4.6,
            tahun: '2022',
            type : 'series', 
            image : '/images/lanjutTonton10.png',
            update : false,
            watched: true,
            genre : [
                    'drama',
                    'olahraga'
                    ],
            deskripsi : ''           
        },
        {
            id :  13,
            name : 'My Hero Academia',
            rating : 4.2,
            tahun: '2016',
            type : 'series', 
            image : '/images/lanjutTonton11.png',
            update : false,
            watched: true,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  14,
            name : 'Stuart Little',
            rating : 4.2,
            tahun: '1999',
            type : 'movie', 
            image : '/images/lanjutTonton12.png',
            update : false,
            watched: true,
            genre : [
                    'komedi'
                    ],
            deskripsi : ''           
        }
        
        
    ]
}))

export default useData;