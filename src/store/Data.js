import {create} from 'zustand'

const useData = create((set)=>({
    usersData : [
        {   
            id : 1 ,
            username:'putraganteng',
            password: 'putraganteng123',
            email: 'putraganteng@gmail.com'
        },
        {
            id: 2 ,
            username:'falah666',
            password: 'falah123',
            email: 'falah@gmail.com'
        },
        {
            id: 3 ,
            username:'gilang777',
            password:'gilang123',
            email: 'gilang@gmail.com'
        }
    ],
    stateId : 3,
    autoIncrementId : () => set((state)=>({stateId : state.stateId + 1})),
    updateUserById: (newData) =>
        set((state) => {
          const updatedUsers = state.usersData.map((user) =>
            user.id === newData.id ? newData : user
          );
          return { usersData: updatedUsers };
        }),

    updateUsersData : (data) =>set((state) => ({ usersData: [...state.usersData,{id : state.stateId+1, ...data } ] })),

    userLogin : 1,
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
        {   id :  5,
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
            deskripsi : '' },
        {   id :  6,
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
            deskripsi : ''},
        {   id :  7,
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
        },
        {
            id :  15,
            name : 'Everythink Everywhare all ot once',
            rating : 4.8,
            tahun: '2022',
            type : 'movie',
            update : false,
            trending: false,
            watched: false,
            image : '/images/image01.png',
            genre : [
                    'aksi',
                    'sci-fi'
                    ],
            deskripsi : ''           
        },
        {
            id :  16,
            name : 'Alice in Borderland',
            rating : 4.3,
            tahun: '2020',
            type : 'series',
            update : true,
            trending: false,
            image : '/images/image02.png',
            watched: false,
            genre : [
                    'drama'
                    ],
            deskripsi : ''           
        },
        {   id :  17,
            name : 'Spider-Man: Across the Spider-Verse',
            rating : 4.8,
            tahun: '2023',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image03.png',
            watched: false,
            genre : [
                    'aksi',
                    'sci-fi'
                    ],
            deskripsi : ''},
        {   id :  18,
            name : 'The Batman',
            rating : 4.7,
            tahun: '2022',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image04.png',
            watched: false,
            genre : [
                    'aksi',
                    'crime'
                    ],
            deskripsi : ''},
        {   id :  19,
            name : 'Suzume',
            rating : 4.7,
            tahun: '2022',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image05.png',
            watched: false,
            genre : [
                    'drama',
                    'petualangan'
                    ],
            deskripsi : ''           
        },
        {
            id :  20,
            name : 'Spirited Away',
            rating : 4.6,
            tahun: '2001',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image06.png',
            watched: false,
            genre : [
                'petualangan',
                'horor'
                    ],
            deskripsi : ''           
        },
        {
            id :  21,
            name : "Don't Look UP!",
            rating : 4.1,
            tahun: '2021',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image07.png',
            watched: false,
            genre : [
                    'komedi',
                    'sci-fi'
                    ],
            deskripsi : ''           
        },
        {
            id :  22,
            name : 'Breaking Bad',
            rating : 4.9,
            tahun: '2008',
            type : 'series',
            update : true,
            trending: false,
            image : '/images/image08.png',
            watched: false,
            genre : [
                    'drama',
                    'crime'
                    ],
            deskripsi : ''           
        },
        {
            id :  23,
            name : 'Dark',
            rating : 4.8,
            tahun: '2017',
            type : 'movie',
            update : true,
            trending: true,
            image : '/images/image09.png',
            watched: false,
            genre : [
                    'sci-fi',
                    'misteri'
                    ],
            deskripsi : ''           
        },
        {
            id :  24,
            name : 'AKIRA',
            rating : 4.7,
            tahun: '1988',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image10.png',
            watched: false,
            genre : [
                    'aksi',
                    'sci-fi'
                    ],
            deskripsi : ''           
        },
        {
            id :  25,
            name : 'Inglorius Bastard',
            rating : 4.4,
            tahun: '2009',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image11.png',
            watched: false,
            genre : [
                    'aksi',
                    ],
            deskripsi : ''           
        },
        {
            id :  26,
            name : 'Neon Genesis Evangelion',
            rating : 4.7,
            tahun: '1995',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image12.png',
            watched: false,
            genre : [
                    'sci-fi',
                    'misteri'
                    ],
            deskripsi : ''           
        },
        {
            id :  27,
            name : 'The Godfather',
            rating : 4.9,
            tahun: '1972',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image13.png',
            watched: false,
            genre : [
                    'crime'
                    ],
            deskripsi : ''           
        },
        {
            id :  28,
            name : 'Blue Lock',
            rating : 4.2,
            tahun: '2022',
            type : 'series',
            update : true,
            trending: true,
            image : '/images/image14.png',
            watched: false,
            genre : [
                    'olahraga',
                    ],
            deskripsi : ''           
        },
        {
            id :  29,
            name : 'Big Hero 6',
            rating : 4.1,
            tahun: '2014',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image16.png',
            watched: false,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  30,
            name : 'Duty after school',
            rating : 3.7,
            tahun: '2023',
            type : 'series',
            update : true,
            trending: true,
            image : '/images/image20.png',
            watched: false,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  31,
            name : 'Doctor Strange in the Multiverse of Madness',
            rating : 3.9,
            tahun: '2022',
            type : 'series',
            update : true,
            trending: false,
            image : '/images/image22.png',
            watched: false,
            genre : [
                    'aksi',
                    'horor'
                    ],
            deskripsi : ''           
        },
        {
            id :  32,
            name : 'My Hero Academia',
            rating : 4.1,
            tahun: '2016',
            type : 'series',
            update : true,
            trending: true,
            image : '/images/image21.png',
            watched: false,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  33,
            name : 'Dilan',
            rating : 4.1,
            tahun: '2018',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image28.png',
            watched: false,
            genre : [
                    'drama'
                    ],
            deskripsi : ''           
        },
        {
            id :  34,
            name : 'Baymax!',
            rating : 3.6,
            tahun: '2023',
            type : 'series',
            update : true,
            trending: false,
            image : '/images/image27.png',
            watched: false,
            genre : [
                    'drama'
                    ],
            deskripsi : ''           
        },
        {
            id :  35,
            name : 'Sonic 2',
            rating : 3.5,
            tahun: '2022',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image30.png',
            watched: false,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  36,
            name : 'Guardian of the Glaxy vol:3',
            rating : 4.7,
            tahun: '2023',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image31.png',
            watched: false,
            genre : [
                    'aksi',
                    'petualangan'
                    ],
            deskripsi : ''           
        },
        {
            id :  37,
            name : 'Little Mermaid',
            rating : 3.7,
            tahun: '2023',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image32.png',
            watched: false,
            genre : [
                    'drama'
                    ],
            deskripsi : ''           
        },
        {
            id :  38,
            name : 'A Man calld Otto',
            rating : 4.1,
            tahun: '2022',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image33.png',
            watched: false,
            genre : [
                    'drama'
                    ],
            deskripsi : ''           
        },
        {
            id :  39,
            name : 'Shazam',
            rating : 3.8,
            tahun: '2016',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image34.png',
            watched: false,
            genre : [
                    'aksi'
                    ,'komedi'
                ],
            deskripsi : ''           
        },
        {
            id :  40,
            name : 'Fall',
            rating : 4.1,
            tahun: '2022',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image35.png',
            watched: false,
            genre : [
                    'horor'
                    ],
            deskripsi : ''           
        },
        {
            id :  41,
            name : 'Parasite',
            rating : 4.8,
            tahun: '2019',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image36.png',
            watched: false,
            genre : [
                    'drama',
                    'komedi'
                    ],
            deskripsi : ''           
        },
        {
            id :  42,
            name : 'Naruto',
            rating : 4.1,
            tahun: '1999',
            type : 'series',
            update : true,
            trending: true,
            image : '/images/image37.png',
            watched: false,
            genre : [
                    'aksi',
                    'petualangan'
                    ],
            deskripsi : ''           
        },
        {
            id :  43,
            name : 'Her',
            rating : 4.2,
            tahun: '2013',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image38.png',
            watched: false,
            genre : [
                    'drama'
                    ],
            deskripsi : ''           
        },
        {
            id :  44,
            name : 'Forest Gump',
            rating : 4.9,
            tahun: '1994',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image40.png',
            watched: false,
            genre : [
                    'drama',
                    'komedi'
                    ],
            deskripsi : ''           
        },
        {
            id :  45,
            name : 'Fight Club',
            rating : 4.7,
            tahun: '1999',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image41.png',
            watched: false,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },{
            id :  46,
            name : 'Frieren: After The End',
            rating : 4.9,
            tahun: '2023',
            type : 'series',
            update : true,
            trending: true,
            image : '/images/image43.png',
            watched: false,
            genre : [
                    'petualangan',
                    'drama',
                    'aksi'
                    ],
            deskripsi : ''           
        },{
            id :  47,
            name : 'Dead Poet Society',
            rating : 4.6 ,
            tahun: '1989',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image46.png',
            watched: false,
            genre : [
                    'horor'
                    ],
            deskripsi : ''           
        },
        {
            id :  48,
            name : 'Demon Slayer',
            rating : 4.4,
            tahun: '2022',
            type : 'series',
            update : true,
            trending: true,
            image : '/images/image47.png',
            watched: false,
            genre : [
                    'aksi',
                    'petualangan'
                    ],
            deskripsi : ''           
        },
        {
            id :  49,
            name : 'Pulp Fiction',
            rating : 4.8,
            tahun: '1994',
            type : 'movie',
            update : false,
            trending: false,
            image : '/images/image50.png',
            watched: false,
            genre : [
                    'aksi'
                    ],
            deskripsi : ''           
        },
        {
            id :  50,
            name : 'Interstelar',
            rating : 4.9,
            tahun: '2014',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image51.png',
            watched: false,
            genre : [
                    'sci-fi'
                    ],
            deskripsi : ''           
        },
        {
            id :  51,
            name : 'Midsommar',
            rating : 4.7,
            tahun: '2019',
            type : 'movie',
            update : false,
            trending: true,
            image : '/images/image52.png',
            watched: false,
            genre : [
                    'horor',
                    'misteri'
                    ],
            deskripsi : ''           
        },
        
    ]
}))

export default useData;