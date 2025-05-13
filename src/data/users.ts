import type { Painting } from '@/types/painting'
import type { User } from '@/types/user'

//import img
import user1Profile from '@/assets/img/userProfile/user1.png'
import user2Profile from '@/assets/img/userProfile/user2.jpg'
import user3Profile from '@/assets/img/userProfile/user3.jpg'

export const mockUsers: User[] = [
  {
    id: 1,
    profileSrc: user1Profile ,
    name: 'Olivia Lee',
    tel: '0812345678',
    email: 'somchai@example.com',
    birthDate: new Date('1992-02-14') ,
    address: {
      province: 'ChiangMai',
      city: 'MueangChiangMai',
      town: 'Suthep',
      postCode: '50200'
    },
    biography: 'A dedicated student at the School of Art, has a keen interest in impressionism.',
    rank: 'Adept Creator',
    Paintings: []
  },
  {
    id: 2,
    profileSrc: user2Profile ,
    name: 'Suda Inthanon',
    tel: '0898765432',
    email: 'suda@example.com',
    birthDate:  new Date('1985-05-21'),
    address: {
      province: 'Bangkok',
      city: 'PhayaThai',
      town: 'SamsenNai',
      postCode: '10400'
    },
    biography: 'Specializes in contemporary Thai culture visual storytelling.',
    rank: 'Emerging Talent',
   Paintings: []
  },
  {
    id: 3,
    profileSrc: user3Profile,
    name: 'Wirote Chaiyasit',
    tel: '0823456789',
    email: 'wirote@example.com',
    birthDate:  new Date('1995-07-30'),
    address: {
      province: 'Nakhon Ratchasima',
      city: 'PakChong',
      town: 'MuSi',
      postCode: '30130'
    },
    biography: 'An artist who mixes traditional Thai art with modern media.',
    rank: 'Apprentice Artists',
    Paintings: []
  }
]
