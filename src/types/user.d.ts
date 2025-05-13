import type { Painting } from '@/types/painting'

export interface User {
    id: number
    profileSrc : string
    name: string
    tel : string
    email :string
    birthDate: Date
    address : {
      province : string
      city : string
      town : string
      postCode : string
    }
    biography : string
    rank:  'Adept Creator' | 'Emerging Talent' | 'Apprentice Artists'
    Paintings : Painting[]
}


